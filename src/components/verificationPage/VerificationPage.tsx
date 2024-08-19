

const VerificationPage = () => {
    return (
        <div className="flex items-center justify-center m-10">
            <div className="h-96 w-96 flex flex-col items-center justify-center p-10 border-2 rounded-md shadow-md grad-bg m-11">
                A verification email was sent on your email address: 
                <button className="sub-button p-4 border-2 rounded-md m-4 shadow-md">
                    Verified
                </button>
            </div>
        </div>
    )
}

export default VerificationPage;