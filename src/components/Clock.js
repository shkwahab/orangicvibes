import React, { Fragment } from 'react'

const Clock = ({Daytimer,Hourtimer,Mintimer,Sectimer}) => {
    return (
        <Fragment>
            <div className="my-12 flex ">
                <div className="font-QuickSand  text-white text-4xl font-bold">
                    {Daytimer}
                </div>
                <div className="mt-3 mx-1  font-thin text-gray-200 font-Jost uppercase text-sm">
                    Days
                </div>
                <div className="font-QuickSand ml-4 text-white text-4xl font-bold">
                    {Hourtimer}
                </div>
                <div className="mt-3 mx-1  font-thin text-gray-200 font-Jost uppercase text-sm">
                    HOUR
                </div>
                <div className="font-QuickSand ml-4 text-white text-4xl font-bold">
                    {Mintimer}
                </div>
                <div className="mt-3 mx-1  font-thin text-gray-200 font-Jost uppercase text-sm">
                    MINUTE
                </div>
                <div className="font-QuickSand ml-4 text-white text-4xl font-bold">
                    {Sectimer}
                </div>
                <div className="mt-3 mx-1  font-thin text-gray-200 font-Jost uppercase text-sm">
                    SECOND
                </div>
            </div>
        </Fragment>
    )
}

Clock.defualtProps={
    Daytimer:0,
    Hourtimer:0,
    Mintimer:0,
    Sectimer:0,

}
export default Clock
