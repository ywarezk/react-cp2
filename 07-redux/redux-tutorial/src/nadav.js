import { useState } from "react";

// widgets
// time, user, role => default: time
// <Search />

// <Chart />

// <SearchContext> => createContext("time")


// app

// 
// <SearchContext value="user" > <Search> </SearchContext>
// 

// 

let data = "time";

export default function useSearchData() {
    const [stateData, setStateData] = useState(data);

    function setData(newData) {
        data = newData;
        setStateData(newData);
    }

    return [stateData, setData];                
}