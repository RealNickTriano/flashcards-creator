import React from 'react'

const decks = () => {
  return (
    <div className='flex flex-col justify-start gap-12 items-center h-screen py-6'>
        <ul className='text-blue-500 font-medium text-xl flex justify-around items-center w-full'>
            <li>Create New</li>
            <li>Edit</li>
            <li>Marketplace</li>
        </ul>
        <table className='border-separate border-spacing-x-8 border-spacing-y-4 table-auto text-center w-[70%]'>
            <thead>
                <tr>
                    <th className='bg-white rounded-sm shadow-md py-2 px-1'>Title</th>
                    <th className='bg-white rounded-sm shadow-md py-2 px-1'>Cards</th>
                    <th className='bg-white rounded-sm shadow-md py-2 px-1'>Author</th>
                </tr>
            </thead>
            <tbody>
                <tr className='bg-blue-300'>
                    <td className='py-2 rounded-sm shadow-md'>Java Chapter 1: Variables and Data Types</td>
                    <td className='py-2 rounded-sm shadow-md'>21</td>
                    <td className='py-2 rounded-sm shadow-md'>Author</td>
                    <td className='font-medium bg-neutral-200 text-blue-500'><button>Study</button></td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default decks