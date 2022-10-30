import { View, Text, StyleSheet, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import book from '../assets/images/book.jpg'
import pen from '../assets/images/pen.jpg'
import shirt from '../assets/images/shirt1.jpg'
import watch from '../assets/images/watch1.jpg'
import shoes from '../assets/images/shoes.jpg'
import goku from '../assets/images/goku.jpg'

const Row=({children})=>{
    return(<View style={styles.row}>
    {children}
    </View>)
    }
    const Col=({children})=>{
    return(<View style={styles.col}>
    {children}
    </View>)
    }
    const Posts1=()=>{
      return(
      <View style={styles.app}>
        <Row>
        <Col >
        <TouchableOpacity>
        <Image source={book} style={styles.img}/>
        </TouchableOpacity>
        </Col>
        <Col >
        <TouchableOpacity>
        <Image source={shoes} style={styles.img}/>
        </TouchableOpacity>
        </Col>
        </Row>

        <Row>
        <Col >
        <TouchableOpacity>
        <Image source={goku} style={styles.img}/>
        </TouchableOpacity>
        </Col>
        <Col >
        <TouchableOpacity>
        <Image source={shirt} style={styles.img}/>
        </TouchableOpacity>
        </Col>
        </Row>

        <Row>
        <Col >
        <TouchableOpacity>
        <Image source={pen} style={styles.img}/>
        </TouchableOpacity>
        </Col>
        <Col >
        <TouchableOpacity>
        <Image source={watch} style={styles.img}/>
        </TouchableOpacity>
        </Col>
        </Row>

      
      </View>
      )
      }
      const styles=StyleSheet.create({
          app: {
              flex: 4, // the number of columns you want to devide the screen into
              marginHorizontal: "auto",
              width: 330,
              
            },
      col:{
          
          borderColor:  "#fff",
          borderWidth:  1,
          flex:  2,
          
          
      },
      row:{
          flexDirection:"row",
          marginTop:20,
          marginLeft:"3%"
      },
      img:{
          height:150,
          width:150,
          marginLeft:10,
          borderRadius:20
      }
      })
      export default Posts1