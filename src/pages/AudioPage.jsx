import { 
  Box, 
  Stack, 
  InputGroup, 
  InputLeftElement, 
  Input, 
  Select,
  Text,
  Flex,
  Image
 } from '@chakra-ui/react'
import { Progress } from '@chakra-ui/react'

import { BiSearch } from 'react-icons/bi'
import { AiOutlineHeart, AiTwotoneFire } from "react-icons/ai"
import { MdWatchLater } from "react-icons/md"  

import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { filterAudioData, getAudioProjectData, sortAudioData } from '../Redux/AppReducer/actions'
import style from "./CssFolder/audio.module.css"
import AccordionComponent from '../components/AccordionComponent'
import { Link } from 'react-router-dom'

const AudioPage = () => { 

   const audioData = useSelector((state)=>state.appReducer.audioProjects)
   
   const dispatch = useDispatch() 

   console.log(audioData)


   const handleFilterAudio = (e) =>{ 
       
       let value = e.target.value 
        

       if(value === "All")
       {
        dispatch(getAudioProjectData())
       }
       else{
           console.log("from filter", value)
          dispatch(filterAudioData(value))
       }
   }

   const handleSort = (e) =>{ 

    let value = e.target.value 
    console.log(value) 
    dispatch(sortAudioData(value))
   }

   useEffect(()=>{
       if(audioData.length === 0 ){
           dispatch(getAudioProjectData())
       }
   },[dispatch, audioData.length])

  return (
    <div>
        <div className={style.topSectionSMR}>
           <h2>Audio</h2>
           <h3>Life in hi-hi</h3>
        </div>
        <div className={style.mainContainerSMR}>
             <div className={style.filterAndCategorySMR}>
                  <h2>Filter Results</h2>
                  <h3>CATEGORY</h3>
                  <h4>All Categories</h4>
                <AccordionComponent/>
                <h1>PROJECT TIMING</h1>
                <hr />
                <div className={style.RadioFilterDiv} onChange = {handleFilterAudio}>
                          <div>
                              <input type={"radio"} value="All" name='a'/>
                              <label>All</label>
                          </div>
                          <div>
                              <input type={"radio"} value="Launching soon" name='a' />
                              <label>Launching soon</label>
                          </div>
                          <div>
                              <input type={"radio"} value="Just Launched" name='a'/>
                              <label>Just Launched</label>
                          </div>      
                </div>
             </div>
             <div  className={style.AudioMainDivSMR}>
                 <Box mt={"50px"} className={style.SearchBarDiv}>
                     <Stack>
                     <InputGroup>
                          <InputLeftElement
                            pointerEvents='none'
                            children={<BiSearch color='gray.300' />}
                          />
                          <Input type='search' placeholder='Search for campaigns' borderRadius={"0px"}/>
                        </InputGroup>
                     </Stack>
                 </Box>
                 <hr className={style.LineAfterInputSMR}/>
                 <Box mt={"40px"} mb="20px">
                     <Flex justifyContent={"end"} gap="10px" alignItems={"center"}>
                          <Box className={style.filterDivRightSmr}>
                             <Select w={"120px"} borderRadius="0" onChange={handleFilterAudio}>
                                <option value='All'>All</option> 
                                <option value='Launching soon'>Launching soon</option>
                                <option value='Just Launched'>Just Launched</option>
                              </Select>
                          </Box>
                          <Box>
                              <Select w={"120px"} borderRadius="0" onChange={handleSort}>
                                <option value=''>Sort by</option> 
                                <option value='asc'>Trending</option>
                                <option value='desc'>Most Funded</option>
                              </Select>
                          </Box>   
                     </Flex>
                 </Box>
                 <Box className={style.audioProjectDivsSMR}>
                        
                       {   
                           audioData.length > 0 && 

                           audioData.map((elem)=>(
                             <Box key={elem.id} className={style.audioProjectInnerDivsSMR}>
                              <Link to={`/audio/${elem.id}`}>
                                <Image src={elem.cover}/>
                                <Box padding={"20px"} className={style.audioProjectInnerInfoDivsSMR}>
                                  <Box mb={"10px"}>
                                         <Flex  justifyContent="space-between" gap="10px" alignItems={"center"}>
                                              <Text fontSize='sm' color="teal">{elem.category}</Text> 
                                              <AiOutlineHeart />
                                         </Flex>
                                  </Box> 
                                  <hr /> 
                                  <h2>{elem.title}</h2>
                                  <p>{elem.features}</p> 
                                  <h3>Audio</h3>
                                  <Box>
                                      <Flex justifyContent={"space-between"} alignItems={"center"}>
                                          <Box className={style.FundDivSmr}>
                                                  <h2>{elem.fund}</h2>
                                                  <p>raised</p>
                                          </Box>
                                          <Box>
                                            <p>{elem.percentage}%</p>
                                          </Box>
                                      </Flex>
                                  </Box> 
                                  <Progress borderRadius={"10px"} colorScheme='green' size='sm' value={elem.percentage} />
                                   <Box className={style.daysLeftDivSMR}>
                                    {
                                      elem.daysLeft === "Now Funding through InDemand" ? <AiTwotoneFire/> :   <MdWatchLater/>
                                    }
                                    <p>{elem.daysLeft === "Now Funding through InDemand" ? elem.daysLeft: elem.daysLeft + " days left"}</p>
                                   </Box>
                                </Box>
                                </Link>
                             </Box>
                           ))
                       }
                 </Box>
             </div>
        </div>
    </div>
  )
}

export default AudioPage