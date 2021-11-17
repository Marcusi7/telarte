import React from "react";
import { Pagination as PaginationSU } from "semantic-ui-react";
import {useRouter} from "next/router";
import querystring from "query-string";

export default function Pagination(props) {
    const{ totalProduct,page,limitPerPage } = props;
    const totalPages = Math.ceil(totalProduct / limitPerPage);
    const router = useRouter();
      const urlParse= querystring.parseUrl(router.asPath);
      //console.log(urlParse);

     const goToPage = (newPage)=>{
       urlParse.query.page = newPage;
       const url = querystring.stringifyUrl(urlParse);
       router.push(url);
     };

    return (
        <div className="pagination">
            <PaginationSU
             defaultActivePage={page}
             totalPages={totalPages}
             firstItem={null}
             lastItem={null}
             onPageChange={(_,data)=> goToPage(data.activePage)}
             boundaryRange={0}
             siblingRange={1}
             ellipsisItem={null}
            />
        </div>
    )
}
