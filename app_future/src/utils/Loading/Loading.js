import React from 'react'

export const Loading = ({ loading }) => {
    return (
        <div>
            {loading ?
                <div>
                    <div class="spinner-border text-secondary" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
                : (
                    <>
                    </>
                )}
        </div>
    )
}
