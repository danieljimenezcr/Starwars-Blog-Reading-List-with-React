import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Pagination from "../component/pagination";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
const Vehicles = () => {
    let [searchParams, setSearchParams] = useSearchParams();
    const { store, actions } = useContext(Context);
    const [totalPages, setTotalPages] = useState(1)

    useEffect(() => {
        async function fetchData() {
           let resp = await actions.getList("vehicles", searchParams.get("page"))
            setTotalPages(resp.pages)
        }
        fetchData();

    }, [searchParams.get("page")])


    return (
        <>
            <h1 className="page-title">Vehicles</h1>
            <div className="container">
                <div className="row">
                    {store.vehicles?.map((vehicle) => (
                        <div key={vehicle.uid} className="col-3">
                            <div className="element-card">
                                <img src={vehicle.img} alt="" className="card-img-top" />
                                <h5 className="card-title-section">{vehicle.name}</h5>
                                <Link to={`/vehicles/${vehicle.uid}`} className="btn btn-warning">
                                    Read More
                                </Link>
                            </div>

                        </div>
                    ))}
                </div>
            </div>

            <Pagination
                pages={totalPages}
                element="vehicles"
                currentPage={searchParams.get("page")}
            />
        </>
    );
};

export default Vehicles;
