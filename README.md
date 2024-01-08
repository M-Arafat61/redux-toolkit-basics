### Redux toolkit steps

1.Create store
2.Create reducer(name as slices)

- declare a initialState for the reducer
- reducer takes properties and functions in createSlice
- function contains (state, action), state is the initialState of the slice

- export slice of reducer
- export reducer functions
- export as default reducer

  3.useDispatch from react-redux

- useDispatch hook calls reducer function to update store with value
- value can be found as object in action payload

  4.useSelector

- useSelector hook access redux store store to extract and select specific data
