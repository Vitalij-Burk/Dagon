import React from 'react'
import { TreesCard } from '../constants'
import { ITreesProps } from '@/app/types'
import Image from 'next/image'

const Trees = () => {
  return (
    <div className="trees">
      <h2 className='h2-bold'>Деревья, которые мы используем</h2>
      <ul className='trees-cards'>
        {TreesCard().map((card: ITreesProps) => {
          return (
            <li key={card.label} className='trees-card'>
              <Image src={card.imgURL} alt={card.label} width={200} height={200} className=' rounded-lg' />
              <p className='body-bold mt-3'>{card.label}</p>
            </li>
          )
        })}
      </ul>
      <h3 className='h3-bold'>И ещё много других пород</h3>
    </div>
  )
}

export default Trees