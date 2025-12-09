export default function Button({buttonText = "Buy"}) {
    return(
        <button className='mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 mx-auto block'>
            {buttonText}
        </button>
    )
}