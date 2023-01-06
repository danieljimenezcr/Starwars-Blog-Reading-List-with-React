import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Pagination from "../component/pagination";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Species = () => {
    let [searchParams, setSearchParams] = useSearchParams();
    const { store, actions } = useContext(Context);
    const [totalPages, setTotalPages] = useState(1)

    useEffect(() => {
        async function fetchData() {
            let resp = await actions.getList("species", searchParams.get("page"))
            setTotalPages(resp.pages)

        }
        fetchData();

    }, [searchParams.get("page")])


    return (
        <>
            <h1 className="page-title">Species</h1>
            <div className="container">
                <div className="row">
                    {store.species?.map((species) => (
                        <div key={species.uid} className="col-3">
                            <div className="element-card">
                                <img src={species.img} alt="" className="card-img-top" />
                                <h5 className="card-title-section">{species.name}</h5>
                                <Link to={`/species/${species.uid}`} className="btn btn-warning">
                                    Read More
                                </Link>
                            </div>

                        </div>
                    ))}
                </div>
            </div>

            <Pagination
                pages={totalPages}
                element="species"
                currentPage={searchParams.get("page")}
            />
        </>
    );
};

export default Species;
