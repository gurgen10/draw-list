import React from 'react';
import ReactHtmlParser from 'react-html-parser';


export default function Record({label, objKey, item}) {
    return ( 
        <> 
            <b>{label}:</b> {ReactHtmlParser(item[objKey])} <br/> 
        </>
    )
}
