import React, { Component } from 'react';
import Title from './Title';
import { RoomContext } from '../context';
export default class FeaturedRooms extends Component {
    static contextType = RoomContext;
    render() {
        const context = this.context;
        console.log(context);
        return (
            <div>
                <Title title="featured rooms" />
                from featured rooms
            </div>
        )
    }
}
