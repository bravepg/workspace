import React from 'react';
import Placeholder from './Placeholder';
// import { createFetcher } from './createFetcher';
import useFetch from 'fetch-suspense';

// export var fetchSometingApi = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("加载完毕，这是你要的一段数据");
//         }, 3000);
//     });
// }
// const getData = createFetcher(fetchSometingApi);
const getData = () => useFetch('https://api.github.com/');

const FangZheng = ({ name }) => {
    return <h1>{getData()}!</h1>
}

export default class App extends React.Component {

   render() {
        return (
            <Placeholder>
                <FangZheng />
            </Placeholder>
        );
    }
}