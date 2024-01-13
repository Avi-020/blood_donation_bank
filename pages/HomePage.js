import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Dashboard from './Dashboard'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
// import Image from 'next/image'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'

function HomePage() {
    return (
        <div>
            <h1 className='mt-5' >
                {/* <Image
                src="https://w7.pngwing.com/pngs/552/293/png-transparent-blood-donation-blood-bank-world-blood-donor-day-blood-donors-hand-donation-arm.png"
                width={500}
                height={500}
                alt="Picture of the author"
            /> */}
                Blood Bank Management System</h1>
            <p className='mb-5'>Goverment of India</p>

            <Tabs variant='enclosed'>
                <TabList>
                    <Tab>Home</Tab>
                    <Tab>Dashboard</Tab>
                    <Tab>Donor Registration</Tab>
                    <Tab>Available Blood Groups</Tab>

                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Card align='center' mt={5} mb={5}>
                            <CardBody >
                                <TableContainer>
                                    <Table variant='simple'>
                                        <TableCaption>Compatible Blood Type Donors</TableCaption>
                                        <Thead>
                                            <Tr>
                                                <Th>Blood Type</Th>
                                                <Th>Donate Blood To</Th>
                                                <Th >Receive Blood From</Th>
                                            </Tr>
                                        </Thead>
                                        <Tbody>
                                            <Tr>
                                                <Td>A+</Td>
                                                <Td>A+ AB+</Td>
                                                <Td >A+ A- O+ O-</Td>
                                            </Tr>
                                            <Tr>
                                                <Td>O+</Td>
                                                <Td>O+ A+ B+ AB+ </Td>
                                                <Td  >O+ O-</Td>
                                            </Tr>
                                            <Tr>
                                                <Td>B+</Td>
                                                <Td>B+ AB+</Td>
                                                <Td  >B+ B- O+ O-</Td>
                                            </Tr>
                                            <Tr>
                                                <Td>AB+</Td>
                                                <Td>AB+</Td>
                                                <Td  >Everyone</Td>
                                            </Tr>





                                            <Tr>
                                                <Td>A-</Td>
                                                <Td>A+ A- AB+ AB-</Td>
                                                <Td  >A- O-</Td>
                                            </Tr>

                                            <Tr>
                                                <Td>O-</Td>
                                                <Td>	O-</Td>
                                                <Td  >	O-</Td>
                                            </Tr>

                                            <Tr>
                                                <Td>B-</Td>
                                                <Td>B+ B- AB+ AB-</Td>
                                                <Td  >B- O-</Td>
                                            </Tr>

                                            <Tr>
                                                <Td>AB-</Td>
                                                <Td>AB+ AB-</Td>
                                                <Td  >AB- A- B- O-</Td>
                                            </Tr>
                                        </Tbody>
                                    </Table>
                                </TableContainer>
                            </CardBody>
                        </Card>
                    </TabPanel>
                    <TabPanel>
                        <Dashboard />
                    </TabPanel>
                    <TabPanel>
                        donar
                    </TabPanel>
                    <TabPanel>
                        Available Blood Groups
                    </TabPanel>


                </TabPanels>
            </Tabs>


        </div>
    )
}

export default HomePage
