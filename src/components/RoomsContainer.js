import React from 'react'
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList'
import { withRoomConsumer } from '../context';
import Loading from '../components/Loading';

function RoomsContainer({context}) {
    console.log(context);
    const {loading, sortedRooms, rooms} = context;
    if(loading){
            return <Loading/>
        }
        return (
             <>
                <RoomsFilter rooms={rooms} />
                <RoomsList rooms={sortedRooms} />
             </>
        );
}


export default withRoomConsumer(RoomsContainer);





// import React from 'react'
// import RoomsFilter from './RoomsFilter';
// import RoomsList from './RoomsList'
// import { RoomsConsumer, RoomConsumer } from '../context';
// import Loading from '../components/Loading';

// export default function RoomsContainer() {
//     return (
//         <RoomConsumer>
//             {
//                 (value) => {
//                     const {loading, sortedRooms, rooms} = value;
//                     if(loading){
//                         return <Loading/>
//                     }
//                     return (
//                     <div>
//                          <div>
//                             hello from rooms container
//                             <RoomsFilter rooms={rooms} />
//                             <RoomsList rooms={sortedRooms} />
//                          </div>
//                     </div>
//                     );
//                 }
//             }
//         </RoomConsumer>
       
//     )
// }
