import React, { useState } from 'react'
import { SuperButton } from '../../../../s1-main/m1-ui/u0-common/c2-SuperButton/SuperButton'
import { NavLink } from 'react-router-dom'
import { ApiPacksType } from '../../p3-dal/packsAPI'
import { useDispatch, useSelector } from 'react-redux'
import { actions, InitialPacksStateType, thunks } from '../../p2-bll/packsReducer'
import SortButton from '../../../../s1-main/m1-ui/u0-common/Atoms/SortButton/SortButton'
import { AppStateType } from '../../../../s1-main/m2-bll/store'

export const usePacks = () => {
   const dispatch = useDispatch()
   const {
      showAddModal,
      deleteModal: { showDeleteModal },
   } = useSelector<AppStateType, InitialPacksStateType>((state) => state.packs)

   const modelPacks = {
      renderTitle: () => {
         const headerNames = ['Name', 'CardsCount', 'update', 'url']

         return (
            <tr>
               {headerNames.map((header, index) => {
                  if (header === 'Name') {
                     return (
                        <th key={index}>
                           <div>
                              {header}
                              <SortButton fetchProducts={thunks.fetchPacks} setSortProducts={actions.sortPacks} />
                           </div>
                        </th>
                     )
                  }
                  return <th key={index}>{header}</th>
               })}
               <th>
                  <SuperButton
                     onClick={() => {
                        dispatch(actions.showAddModal(!showAddModal))
                     }}>
                     ADD
                  </SuperButton>
               </th>
            </tr>
         )
      },
      renderData: (pack: ApiPacksType, index: number) => {
         return (
            <tr key={index}>
               <td>{pack.name}</td>
               <td>{pack.cardsCount}</td>
               <td>{pack.updated.slice(5, 16)}</td>
               <td>{pack.deckCover}</td>
               <td>
                  <SuperButton
                     onClick={() => {
                        dispatch(actions.showDeleteModal(!showDeleteModal, pack._id))
                     }}>
                     del
                  </SuperButton>
                  <SuperButton
                     onClick={() => dispatch(thunks.updatePack({ _id: pack._id, name: 'Updated galera pack' }))}>
                     update
                  </SuperButton>
                  <NavLink to={`/cards/${pack._id}`}>cards</NavLink>
               </td>
            </tr>
         )
      },
   }
   return { modelPacks }
}
