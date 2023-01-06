import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Pagination from "../component/pagination";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
const Planet = () => {
    let [searchParams, setSearchParams] = useSearchParams();
    const { store, actions } = useContext(Context);
    const [totalPages, setTotalPages] = useState(1)

    useEffect(() => {
        async function fetchData() {
            let resp = await actions.getList("planets", searchParams.get("page"))
            setTotalPages(resp.pages)
        }
        fetchData();

    }, [searchParams.get("page")])


    return (
        <>
            <h1 className="page-title">Planets</h1>
            <div className="container">
                <div className="row">
                    {store.planets?.map((planet) => (
                        <div key={planet.uid} className="col-3">
                            <div className="element-card">
                                <img src={planet.img} alt="" className="card-img-top" />
                                <h5 className="card-title-section">{planet.name}</h5>
                                <Link to={`/planets/${planet.uid}`} className="btn btn-warning">
                                    Read More
                                </Link>
                            </div>

                        </div>
                    ))}
                </div>
            </div>

            <Pagination
                pages={totalPages}
                element="planets"
                currentPage={searchParams.get("page")}
            />
        </>
    );
};

export default Planet;
