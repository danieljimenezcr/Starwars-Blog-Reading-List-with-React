import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Pagination from "../component/pagination";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Characters = () => {
    let [searchParams, setSearchParams] = useSearchParams();
    const { store, actions } = useContext(Context);
    const [totalPages, setTotalPages] = useState(1)

    useEffect(() => {
        async function fetchData() {
            let resp = await actions.getList("people", searchParams.get("page"))
            setTotalPages(resp.pages)

        }
        fetchData();

    }, [searchParams.get("page")])


    return (
        <>
            <h1 className="page-title">Characters</h1>
            <div className="container">
                <div className="row">
                    {store.people?.map((people) => (
                        <div key={people.uid} className="col-3">
                            <div className="element-card">
                                <img src={people.img} alt="" className="card-img-top" />
                                <h5 className="card-title-section">{people.name}</h5>
                                <Link to={`/people/${people.uid}`} className="btn btn-warning">
                                    Read More
                                </Link>
                            </div>

                        </div>
                    ))}
                </div>
            </div>

            <Pagination
                pages={totalPages}
                element="people"
                currentPage={searchParams.get("page")}
            />
        </>
    );
};

export default Characters;
