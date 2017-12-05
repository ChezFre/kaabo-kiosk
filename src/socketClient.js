import io from 'socket.io-client';

class SocketService {

    constructor() {
        this.subscribers = [];

        this._connect();
        this._addListeners();
    }

    subscribe( callback ) {
        this.subscribers.push(callback);
    };

    unsubscribe( callback ) {
        this.subscribers = this.subscribers.filter( subscriber => {
            if( subscriber !== callback ) return subscriber;
        })
    };

    _addListeners() {
        this.socket.on('connect', console.info);
        this.socket.on('feedback', (data) => this._handleFeedback(data) );
        this.socket.on('disconnect', console.info);
    }

    _connect() {
        this.socket = io.connect(process.env.REACT_APP_BACKEND,
            { reconnect: true, transports: ['websocket'], path: '/socket.io' });
    }

    _dispatch(category, message) {
        this.subscribers.forEach( subscriber => subscriber({ [category]: message }) );
    }

    _handleFeedback(data) {
        // console.log('_handleFeedback');
        // console.log(data);

        this._dispatch('feedback', data);
    }

}


var socketService = new SocketService();

export default socketService;