import React, { Component } from 'react';
import Title from './Title';
import { RoomContext } from '../context';
export default class FeaturedRooms extends Component {
    static contextType = RoomContext;
    render() {
        const {name, greeting} = this.context;
        
        return (
            <div>
                <Title title="featured rooms" />
                {greeting} {name} from featured rooms
            </div>
        )
    }
}
