
const ALLreviews = ({data}) => {
    const {name,img,des,rate}=data
    return (
        <div>
            <div className="card w-96 bg-base-100 border border-red-400 shadow-xl">
                <figure><img className='w-40 h-40 rounded-xl' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{des}</p>
                    <div className="card-actions justify-end">
                        <p className="">{rate}</p>
                    </div>
                </div>
            </div>


        
        </div>
    );
};

export default ALLreviews;