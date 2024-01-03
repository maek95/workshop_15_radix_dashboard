
import Overview from './Overview.jsx'
import {CaretDownIcon, MagnifyingGlassIcon} from '@radix-ui/react-icons'
import './App.css'
import {Text, TextField, Tabs, Box, Card, Avatar, Flex, Grid, Heading, Table, DropdownMenu, Button} from '@radix-ui/themes'




export default function App() {

  return (
    <>
      <Card >
        <Flex px="5" pb="5" direction="column" gap="4" >

          <Flex style={{borderBottom: '1px solid rgba(0, 0, 0, 0.05)'}} pb="4" align="center" gap="5" justify="between" >

          <Flex align="end" gap="4">

          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <Button color="gray" variant="soft">
                  <Text > Alicia Koch
                    </Text>
                <CaretDownIcon />
              </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
        
              <TextField.Root>
              <TextField.Slot>
                <MagnifyingGlassIcon height="16" width="16" />
              </TextField.Slot>
              <TextField.Input  placeholder="Search Team..." />
              </TextField.Root>
              <DropdownMenu.Separator />

              
              <Box pl="3">
              <Text size="1" weight="bold" color='gray'>
                Personal Account
              </Text>
              <DropdownMenu.Item>Alicia Koch</DropdownMenu.Item>

              </Box>
              
             
              <Box pl="3">

              <Text size="1" weight="bold" color='gray'>
                Teams
              </Text>

              <DropdownMenu.Item>Acme Inc.</DropdownMenu.Item>
              <DropdownMenu.Item>Monsters Inc.</DropdownMenu.Item>
              </Box>
  
              <DropdownMenu.Separator />
              <DropdownMenu.Item> <Flex justify="center" align="center" gap="3">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="mr-2 h-5 w-5"><path d="M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM1.82707 7.49972C1.82707 4.36671 4.36689 1.82689 7.49991 1.82689C10.6329 1.82689 13.1727 4.36671 13.1727 7.49972C13.1727 10.6327 10.6329 13.1726 7.49991 13.1726C4.36689 13.1726 1.82707 10.6327 1.82707 7.49972ZM7.50003 4C7.77617 4 8.00003 4.22386 8.00003 4.5V7H10.5C10.7762 7 11 7.22386 11 7.5C11 7.77614 10.7762 8 10.5 8H8.00003V10.5C8.00003 10.7761 7.77617 11 7.50003 11C7.22389 11 7.00003 10.7761 7.00003 10.5V8H4.50003C4.22389 8 4.00003 7.77614 4.00003 7.5C4.00003 7.22386 4.22389 7 4.50003 7H7.00003V4.5C7.00003 4.22386 7.22389 4 7.50003 4Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                Create Team
                </Flex>
                </DropdownMenu.Item>
            
            </DropdownMenu.Content>
          </DropdownMenu.Root>
            

            
            <Tabs.Root defaultValue="overview">
              {/* <Tabs.List style={{ backgroundColor: 'grey'}} > */}
              <Tabs.List  >
                <Tabs.Trigger  value="overview">Overview</Tabs.Trigger>
                <Tabs.Trigger value="customers">Customers</Tabs.Trigger>
                <Tabs.Trigger value="products">Products</Tabs.Trigger>
                <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
              </Tabs.List>
            </Tabs.Root>
          </Flex>


            <Flex align="end" gap="5">
              <TextField.Input  placeholder="Search..." />

              <Avatar src="src\assets\avatar-01.png"></Avatar>
            </Flex>
            
          </Flex>

     {/*  <div className='dashboard-title-div'>
        <h1>Dashboard</h1>
      </div>
 */}
      <Box pt="4">
        <Heading size="8">
        Dashboard
        </Heading>
      </Box>
      

     <Tabs.Root defaultValue="overview">
      {/* <Tabs.List style={{ backgroundColor: 'grey'}} > */}
      <Tabs.List className='tabs' >
        <Tabs.Trigger className='tab' value="overview">Overview</Tabs.Trigger>
        <Tabs.Trigger value="analytics">Analytics</Tabs.Trigger>
        <Tabs.Trigger value="reports">Reports</Tabs.Trigger>
        <Tabs.Trigger value="notifications">Notifications</Tabs.Trigger>
      </Tabs.List>

     </Tabs.Root>



<Grid columns="2" gap="3" width="auto">
{/* gör dessa cards till en komponent där man skickar med en svg? */}
<Card>
  <Flex p="3" gap="3" align="center" direction="column">
   
    <Flex width="100%" direction="row" justify="between" >
      <Text size="2" weight="bold">Total Revenue</Text>
      
      <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="svg-cards"
                    >
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
      
    </Flex>

      <Flex width="100%" align="start" direction="column" >
        <Text weight="bold" size="6">
        $45,231.89
        </Text>
        <Text weight="" size="2" color='gray'>
        +20.1% from last month
        </Text>
      </Flex>
     
    
  </Flex>
</Card>


<Card>
  <Flex p="3" gap="3" align="center" direction="column">
   
    <Flex width="100%" direction="row" justify="between" >
      <Text size="2" weight="bold">Subscriptions</Text>
      
      <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className="svg-cards"
      >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
     </svg>
      
    </Flex>

      <Flex width="100%" align="start" direction="column" >
        <Text weight="bold" size="6">
          +2350
        </Text>
        <Text weight="" size="2" color='gray'>
          +180.1% from last month
        </Text>
      </Flex>
     
    
  </Flex>
</Card>

<Card>
  <Flex p="3" gap="3" align="center" direction="column">
   
    <Flex width="100%" direction="row" justify="between" >
      <Text size="2" weight="bold">Sales</Text>
      
      <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="svg-cards"
                    >
                      <rect width="20" height="14" x="2" y="5" rx="2" />
                      <path d="M2 10h20" />
                    </svg>
      
    </Flex>

      <Flex width="100%" align="start" direction="column" >
        <Text weight="bold" size="6">
        +12,234
        </Text>
        <Text weight="" size="2" color='gray'>
        +19% from last month
        </Text>
      </Flex>
     
    
  </Flex>
</Card>


<Card>
  <Flex p="3" gap="3" align="center" direction="column">
   
    <Flex width="100%" direction="row" justify="between" >
      <Text size="2" weight="bold">Active Now</Text>
      
      <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="svg-cards"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
      
    </Flex>

      <Flex width="100%" align="start" direction="column" >
        <Text weight="bold" size="6">
        +573
        </Text>
        <Text weight="" size="2" color='gray'>
        +201 since last hour
        </Text>
      </Flex>
     
    
  </Flex>
</Card>


</Grid>

<Card>
  <Flex direction="column" p="4" pl="0">

  
    <Box pl="3" pb="5">
      <Heading size="3">
        Overview
      </Heading>
    </Box>
  

  <Overview />     
  </Flex>
</Card>

<Card>
  <Flex width="100%" direction="column"  py="2" gap="5">

    

    <Table.Root>
     {/*  <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>Full name</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Group</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header> */}

        <Flex width="100%" px="4" pb="2"  direction="column">

        <Heading size="3">
          Recent Sales
        </Heading>

        <Text size="2" color='gray'>
          You made 265 sales this month.
        </Text>
        </Flex>

      <Table.Body >
        <Table.Row align='center'  >
          <Table.RowHeaderCell >
            <Flex gap="4">
              <Avatar src="src\assets\avatar-01.png">
              </Avatar>

              <Flex direction="column">
                <Text size="2" weight="medium">
                  Olivia Martin
                </Text>

                <Text size="2" color='gray'>
                  olivia.martin@email.com
                </Text>
              </Flex>
            </Flex></Table.RowHeaderCell>
          <Table.Cell></Table.Cell>
          <Table.Cell justify="end">
              <Heading size="4" weight="medium">
                +$1,999.0
              </Heading>
            </Table.Cell>
        </Table.Row>

        <Table.Row align='center'  >
          <Table.RowHeaderCell >
            <Flex gap="4">
              <Avatar src="src\assets\avatar-02.png">
              </Avatar>

              <Flex direction="column">
                <Text size="2" weight="medium">
                Jackson Lee
                </Text>

                <Text size="2" color='gray'>
                  jackson.lee@email.com
                </Text>
              </Flex>
            </Flex></Table.RowHeaderCell>
          <Table.Cell></Table.Cell>
          <Table.Cell justify="end">
              <Heading size="4" weight="medium">
              +$39.00
              </Heading>
            </Table.Cell>
        </Table.Row>

        <Table.Row align='center'  >
          <Table.RowHeaderCell >
            <Flex gap="4">
              <Avatar src="src\assets\avatar-03.png">
              </Avatar>

              <Flex direction="column">
                <Text size="2" weight="medium">
                Isabella Nguyen
                </Text>

                <Text size="2" color='gray'>
                isabella.nguyen@email.com
                </Text>
              </Flex>
            </Flex></Table.RowHeaderCell>
          <Table.Cell></Table.Cell>
          <Table.Cell justify="end">
              <Heading size="4" weight="medium">
              +$299.00
              </Heading>
            </Table.Cell>
        </Table.Row>

        <Table.Row align='center'  >
          <Table.RowHeaderCell >
            <Flex gap="4">
              <Avatar src="src\assets\avatar-04.png">
              </Avatar>

              <Flex direction="column">
                <Text size="2" weight="medium">
                William Kim
                </Text>

                <Text size="2" color='gray'>
                will@email.com
                </Text>
              </Flex>
            </Flex></Table.RowHeaderCell>
          <Table.Cell></Table.Cell>
          <Table.Cell justify="end">
              <Heading size="4" weight="medium">
              +$99.00
              </Heading>
            </Table.Cell>
        </Table.Row>

        <Table.Row align='center'  >
          <Table.RowHeaderCell >
            <Flex gap="4">
              <Avatar src="src\assets\avatar-05.png">
              </Avatar>

              <Flex direction="column">
                <Text size="2" weight="medium">
                Sofia Davis
                </Text>

                <Text size="2" color='gray'>
                sofia.davis@email.com
                </Text>
              </Flex>
            </Flex></Table.RowHeaderCell>
          <Table.Cell></Table.Cell>
          <Table.Cell justify="end">
              <Heading size="4" weight="medium">
              +$39.00
              </Heading>
            </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table.Root>


{/*     <Flex direction="column">
      <Flex justify="between" align="center">
        <Flex gap="4">
          <Avatar src="src\assets\avatar-01.png">
            
          </Avatar>

          <Flex direction="column">
            <Text size="2" weight="medium">
              Olivia Martin
            </Text>

            <Text size="2" color='gray'>
              olivia.martin@email.com
            </Text>
          </Flex>
        </Flex>
        <Heading size="4" weight="medium">
          +$1,999.0
        </Heading>
      </Flex>
    </Flex> */}


  </Flex>
</Card>

</Flex>



</Card>
    </>
  )
}


