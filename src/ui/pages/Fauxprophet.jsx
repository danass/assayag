

import React, { useState, useEffect } from "react"
import { Buffer } from 'buffer';
import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Collapse, IconButton, Box, Typography} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

export const Message = ({ message }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
    <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
      <TableCell>
        <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
          {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </IconButton>
      </TableCell>
      <TableCell component="th" scope="row">
        {message.headers.from.map((o)=><div key={`${message._id}-name`}>{o.name}</div>)} 
      </TableCell>
      <TableCell align="right">{message.headers.from.map(o=><div key={`${message._id}-from`}>{o.address}</div>)}</TableCell>
      <TableCell align="right">{message.headers.subject}</TableCell>
      <TableCell align="right">{message.headers.date.toString()}</TableCell>
      <TableCell className={"TableCellDelete"} align="right"><HighlightOffIcon onClick={() => {
        fetchdata(0, messageid)
      }}/></TableCell>
    </TableRow>
    <TableRow>
      <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <Box sx={{ margin: 1 }}>
            <Typography variant="h6" gutterBottom component="div">
              Message
            </Typography>
            <Table size="small" aria-label="purchases">
              <TableHead>
                <TableRow>
                  <TableCell><b>{message.headers.subject}</b></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
              
                    {message.source.childNodes.length != 0 ?
                     message.source.childNodes.map((node, index) => {
                       if(node.content) {
                        let text = Buffer.from(node.content).toString('utf-8')
                       return (<TableCell key={`${message._id}-msg-${index}`} className={"TableCellMsg"}>
                         {Buffer.from(node.content).toString('utf-8')}
                         </TableCell>)
                       }
                       else {
                          return (<TableCell key={`${message._id}-whatever-${index}`}></TableCell>)
                       }
                     })
                    : <TableCell>
                      {Buffer.from(message.source.content).toString('utf-8')}
                    </TableCell>
                    }
               
                </TableRow>
              </TableBody>
            </Table>
          </Box>
        </Collapse>
      </TableCell>
    </TableRow>
  </>
  )
} 

export const Fauxprophet = () => {
  const [messages, updateMessages] = useState(null);

const fetchdata = (messageindex = null, messageid = null, username = null) => {
  Meteor.call('fauxprophet.save', messageindex, messageid, username, (e, m) => {
    if (e) return console.error(e)
    updateMessages(m)
  })
}

useEffect(() => {
  fetchdata()
}, [])


  return (
    <TableContainer >
    <Table aria-label="collapsible table">
      <TableHead>
        <TableRow>
          <TableCell />
          <TableCell>Sender</TableCell>
          <TableCell align="right">From: (email)</TableCell>
          <TableCell align="right">Subject</TableCell>
          <TableCell align="right">Date</TableCell>
          <TableCell align="right">Remove</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {messages?.map((message) => (
          <Message key={message.headers.date.toString()} message={message} />
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}


  // useEffect(() => { 
  //   fetchdata()
  //   const interval = Meteor.setInterval(() => {
  //     fetchdata()
  //     setStop(stop + 1)
  //   }, 15000); 

  //   if(stop >= 3) {
  //     Meteor.clearInterval(interval)
  //   }
    
  //   return () => {
  //     Meteor.clearInterval(interval);
  //   }

  // }, [stop])
