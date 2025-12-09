import Button from "./Button"

export default function Card({
  title = "Card Title", 
  imageURL = "https://images.pexels.com/photos/34483144/pexels-photo-34483144.jpeg",
  buttonText = "Buy"
}) {
    return(
      <div>
        <div className='max-w-sm bg-white border border-gray-700 rounded-xl mt-8 shadow overflow-hidden transition-shadow'>
          <img
            className='w-full h-50 object-cover'
            src={imageURL} 
            alt="flowers" 
          />
          <div className='p-4'>
            <h2 className='text-lg font-semibold text-gray-800 text-center'>
              {title}
            </h2>
            <hr className='mt-4'/>
            <p className='mt-2 text-gray-600-sm text-justify p-5'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic dolore illum voluptate labore eum ad iste molestiae provident dolor, magni, nihil veniam impedit iusto explicabo. Soluta, architecto aliquid! Eum, rerum.
            </p>
            <Button buttonText={buttonText}/>
          </div>
        </div>
      </div>
    )
}