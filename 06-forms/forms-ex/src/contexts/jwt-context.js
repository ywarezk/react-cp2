/**
 * I want to create a context which will contain
 * jwt token
 * setJwtToken
 * when do i use the default value?
 */

import {createContext} from "react";

const JwtContext = createContext( {jwtToken: null, setToken: () => null} )
// createContext( "hello" )
export default JwtContext