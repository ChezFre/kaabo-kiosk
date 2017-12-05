import * as contentful from 'contentful';

class Client {
    
    constructor() {
        
        this.space       = process.env.REACT_APP_SPACE;
        this.accessToken = process.env.REACT_APP_ACCESS_TOKEN;
        this.companies   = [];
        this.client      = this.getClient();
    }

    getClient() {
        return contentful.createClient({
            space: this.space,
            accessToken: this.accessToken
        });
    }

    sortCompanies( companies ) {
        return companies.sort( (a,b) => {
            if( a.name < b.name )   return -1;
            if( a.name === b.name ) return  0;
            
            return  1;
        });
    }

    fetchCompanies() {
        return this.client.getEntries({
            content_type: 'bedrijf',
            order: 'fields.naam'
        })
        .then(( bedrijven ) => {
            
            this.companies = bedrijven.items.map( bedrijf => {
                return {
                    id: bedrijf.sys.id,
                    slug: bedrijf.fields.slug,
                    name: bedrijf.fields.naam,
                    logo: (bedrijf.fields.logo && bedrijf.fields.logo.fields.file.url) || undefined,
                    description: bedrijf.fields.omschrijving,
                    employees: bedrijf.fields.medewerker.map( medewerker => Object.assign({}, medewerker.fields, { id: medewerker.sys.id }))
                }
            });

            return this.companies;
    
            // return this.sortCompanies(companies);
        })
        .catch(console.error)
    }

    getCompany( id ) {

        if( this.companies.length > 0 ) {
            return new Promise( (resolve, reject) => {
               const company = this.companies.filter( company => company.id === id );

               if( company.length > 0 ) {
                   resolve(company[0]);
               } else {
                   reject('No company found for specified id');
               }

            });
        }


        return this.fetchCompanies()
                    .then( () => this.getCompany(id) );
    }


    contactEmployee( id, name, email ) {

        return fetch( `${process.env.REACT_APP_BACKEND}/notify`, {
            method: 'POST',
            mode: 'cors',
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({
                id,
                name,
                email
            })
        })

    };
}



export const client = new Client();