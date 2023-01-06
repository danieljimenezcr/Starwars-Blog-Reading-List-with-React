import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Pagination from "../component/pagination";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
const Starships = () => {
    let [searchParams, setSearchParams] = useSearchParams();
    const { store, actions } = useContext(Context);
    const [totalPages, setTotalPages] = useState(1)

    useEffect(() => {
        async function fetchData() {
           let resp = await actions.getList("starships", searchParams.get("page"))
            setTotalPages(resp.pages)
        }
        fetchData();

    }, [searchParams.get("page")])


    return (
        <>
            <h1 className="page-title">Starships</h1>
            <div className="container">
                <div className="row">
                    {store.starships?.map((starship) => (
                        <div key={starship.uid} className="col-3">
                            <div className="element-card">
                                <img src={starship.img} alt="" className="card-img-top" />
                                <h5 className="card-title-section">{starship.name}</h5>
                                <Link to={`/starships/${starship.uid}`} className="btn btn-warning">
                                    Read More
                                </Link>
                            </div>

                        </div>
                    ))}
                </div>
            </div>

            <Pagination
                pages={totalPages}
                element="starships"
                currentPage={searchParams.get("page")}
            />
        </>
    );
};

export default Starships;
