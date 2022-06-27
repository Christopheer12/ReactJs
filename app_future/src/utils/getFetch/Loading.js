import React from 'react'

export const Loading = ({ condition }) => {
    return (
        <div>
            {condition ?
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
