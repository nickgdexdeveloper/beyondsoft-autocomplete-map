import React from "react";
import moment from "moment";
import { useSelector, useDispatch } from 'react-redux';
import * as action from 'store/action/index';


import { Layout } from 'antd';


import List from 'component/list';
import AutoComplete from 'component/autoComplete';
import Map from 'component/map';


const { Sider, Content } = Layout;


const center = { lat: 5.3332, lng: 100.30664 };
const zoom = 14;





const App = () => {


    const { 
        map_histories,
    } = useSelector((state) => state.map);
    const dispatch = useDispatch();


    const [search, setSearch] = React.useState("");
    const [options, setOptions] = React.useState([]);
    const [geometry, setGeometry] = React.useState(center);



    const handleOnSeachChange = (value) => {
        setSearch(value);
    }


    const onSearch = async (searchText) => {
        await dispatch(action.handleMapList(searchText, async (result) => {

            
            if(result.status !== undefined && result.status === "OK") {
                await setOptions(result.list);
            }


        }));
    };


    const onSelect = async ( option) => {
        await dispatch(action.handleMapShow({
            ...option,
            created_at: moment().format()
        }, async (result) => {


            if(result.status !== undefined && result.status === "OK") {
                await setGeometry(result.data.location)
            }


        }));
    };


    const handleOnResetClick = async () => {
        await dispatch(action.handleMapReset());
    }


    const handleOnItemClick = async (data) => {


        setSearch(data.description)
        await dispatch(action.handleMapShow({
            ...data,
            history: true,
        }, async (result) => {


            if(result.status !== undefined && result.status === "OK") {
                await setGeometry(result.data.location)
            }


        }));

        
    }





    const MapComponent = React.useMemo(() => {


        return (
            <Map
                center={geometry}
                zoom={zoom}
            />
        );


    }, [geometry]);





    return (
        <Layout>
            <Sider>
                <List
                    list={map_histories}
                    headerTitle="Histories"


                    onResetClick={handleOnResetClick}
                    onItemClick={handleOnItemClick}
                />
            </Sider>
            <Content>


                <AutoComplete
                    options={options}
                    value={search}
                    placeholder="Search"


                    onChange={handleOnSeachChange}
                    onSearch={onSearch}
                    onSelect={onSelect}
                />
                {MapComponent}


            </Content>
        </Layout>
    );


}


export default App;








