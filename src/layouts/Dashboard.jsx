import React from 'react'
import Categories from './Categories'
import { GridRow, GridColumn, Grid } from 'semantic-ui-react'
import { Routes, Route } from 'react-router-dom'
import ProductList from '../pages/ProductList'
import ProductDetail from '../pages/ProductDetail'
import CartDetail from '../pages/CartDetail'

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <GridRow>
          <GridColumn width={4}>
            <Categories />
          </GridColumn>

          <GridColumn width={12}>
            <Routes>
              <Route exact path='/' Component={ProductList} /> 
              <Route path='/products' Component={ProductList} /> 
              <Route exact path='/products/:id' Component={ProductDetail} />
              <Route path='/cart' Component={CartDetail} />
            </Routes>
          </GridColumn>
        </GridRow>
      </Grid>
    </div>
  )
}
