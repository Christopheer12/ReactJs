import React from 'react'

export const Loading = ({ loading }) => {
    return (
        <div>
            {loading ?
                <div>
                    <div className="spinner-border text-secondary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
                : (
                    <>
                    </>
                )}
        </div>
    )
}
