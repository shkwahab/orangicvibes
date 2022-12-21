import React from 'react'
import Carousel from 'react-elastic-carousel';

const Blog = () => {
    const data = [
        {
            _id: "1",
            title: "Title1",
            category: "Organic Vibes",
            user_role: "admin",
            date: "August 3,2022",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus praesentium voluptatem autem voluptatibus voluptatum ducimus deserunt totam quia perferendis consequuntur.",
            feautured_img: "/dummypost.png"
        },

        {
            _id: "2",
            title: "Title2",
            category: "Organic Vibes",
            user_role: "admin",
            date: "August 3,2022",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus praesentium voluptatem autem voluptatibus voluptatum ducimus deserunt totam quia perferendis consequuntur.",
            feautured_img: "/dummypost.png"
        },
        {
            _id: "3",
            title: "Title3",
            category: "Organic Vibes",
            user_role: "admin",
            date: "August 3,2022",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus praesentium voluptatem autem voluptatibus voluptatum ducimus deserunt totam quia perferendis consequuntur.",
            feautured_img: "/dummypost.png"
        },
        {
            _id: "4",
            title: "Title4",
            category: "Organic Vibes",
            user_role: "admin",
            date: "August 3,2022",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus praesentium voluptatem autem voluptatibus voluptatum ducimus deserunt totam quia perferendis consequuntur.",
            feautured_img: "/dummypost.png"
        },
        {
            _id: "5",
            title: "Title5",
            category: "Organic Vibes",
            user_role: "admin",
            date: "August 3,2022",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus praesentium voluptatem autem voluptatibus voluptatum ducimus deserunt totam quia perferendis consequuntur.",
            feautured_img: "/dummypost.png"
        },
        {
            _id: "6",
            title: "Title6",
            category: "Organic Vibes",
            user_role: "admin",
            date: "August 3,2022",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus praesentium voluptatem autem voluptatibus voluptatum ducimus deserunt totam quia perferendis consequuntur.",
            feautured_img: "/dummypost.png"
        },
        {
            _id: "7",
            title: "Title7",
            category: "Organic Vibes",
            user_role: "admin",
            date: "August 3,2022",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus praesentium voluptatem autem voluptatibus voluptatum ducimus deserunt totam quia perferendis consequuntur.",
            feautured_img: "/dummypost.png"
        },
        {
            _id: "8",
            title: "Title8",
            category: "Organic Vibes",
            user_role: "admin",
            date: "August 3,2022",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus praesentium voluptatem autem voluptatibus voluptatum ducimus deserunt totam quia perferendis consequuntur.",
            feautured_img: "/dummypost.png"
        },
    ]
    let Blog = data.map((Posts) => {
        return <section className='mx-1 cursor-pointer w-[400px] border-[.5px] border-black border-opacity-30 rounded-md shadow-md' key={Posts._id} id={Posts._id}>
            <div className="card">
                <div className="">
                    <img src={Posts.feautured_img} className=" card-img-top" alt={Posts.title} />
                </div>
                <div className=" card-body">
                    <div className="flex font-Jost ">
                        <p className='text-prim text-sm mr-[12px]'>
                            {Posts.category}
                        </p>
                        <p className=' capitalize text-sec text-sm mr-[6px]'>
                            {Posts.user_role}
                        </p>
                        <p className=' text-sec text-sm '>
                            {Posts.date}
                        </p>
                    </div>
                    <div className="my-1 font-QuickSand ">
                        <h3 className='text-sec font-semibold'>
                        {Posts.title}
                        </h3>
                    </div>
                    <div className="font-Jost text-sec text-sm">
                        {Posts.description.slice(0, 120)} ...
                    </div>
                    <div className="font-semibold font-Jost mt-2 cursor-pointer text-prim">
                        Continue Reading
                    </div>
                </div>
            </div>
        </section>
    })
    return (
        <>
            <div className=' text-center  text-lg'>
                <div className=" font-Schoolbell text-prim">
                    Read our Blog
                </div>
                <div className="my-1">
                    <h2 className="lg:text-4xl font-QuickSand font-black text-sec">
                        Our Latest Post
                    </h2>
                </div>
                <div className="my-1 font-Jost text-sm text-sec">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, totam sequi maiores vero.
                </div>
            </div>
            <div className="container my-4">
                <Carousel className=''showArrows={false}  itemsToShow={4}  itemsToScroll={1} pagination={false} enableAutoPlay={true} autoPlaySpeed={3000}>
                    {Blog}
                </Carousel>
            </div>
        </>
    )
}

export default Blog