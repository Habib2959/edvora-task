import React from "react";

export default function Spinner() {
    return (
        <div style={{height: "100vh"}} className="d-flex justify-content-center align-items-center">
            <div class="spinner-border text-light" role="status" style={{ width: "5rem", height: "5rem" }}>
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}