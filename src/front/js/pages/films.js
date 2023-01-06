import React, { useContext, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Pagination from "../component/pagination";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
const Films = () => {
    let [searchParams, setSearchParams] = useSearchParams();
    const { store, actions } = useContext(Context);

    useEffect(() => {
        async function fetchData() {
            await actions.getList("films", searchParams.get("page"))
        }
        fetchData();

    }, [searchParams.get("page")])


    return (
        <>
            <h1 className="page-title">Films</h1>
            <div className="container">
                <div className="row">
                    {store.films?.map((films) => (
                        <div key={films.uid} className="col-3">
                            <div className="element-card">
                                <img src={films.img} alt="" className="card-img-top" />
                                <h5 className="card-title-section">{films.name}</h5>
                                <Link to={`/films/${films.uid}`} className="btn btn-warning">
                                    Read More
                                </Link>
                            </div>

                        </div>
                    ))}
                </div>
            </div>

            
        </>
    );
};

export default Films;
