import React from 'react'
import Navbar from '../layout/Navbar'
import {Typography, Button, ButtonGroup, Fab} from '@mui/material'
import { AddIcCallRounded } from '@mui/icons-material'


const Homepage = () => {
  return (
    <>
    <Navbar/>

<Typography variant='h4' color='secondary'>
    Homepage
</Typography>
    
    <Typography variant='body1' align='justify' noWrap='true' sx={{"backgroundColor":"yellow"}}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur delectus iste necessitatibus, fugiat temporibus aliquid recusandae ipsam quia architecto voluptatum maiores blanditiis repudiandae dolorem asperiores? Quos corrupti architecto accusantium nobis nemo asperiores a ipsam, voluptates quas. Qui nesciunt voluptates cum quos beatae vitae iure voluptatibus. Autem delectus fuga tenetur nobis vero facilis aliquam perferendis voluptate saepe quod consequuntur ducimus cupiditate quasi expedita officiis fugit, alias possimus quas maxime rerum distinctio quam eveniet aliquid! Laborum nulla ullam facere aliquam fugiat rerum. Quia animi dolore numquam dolorem libero, repudiandae, aliquam ipsam assumenda cumque quibusdam nemo? Enim similique harum itaque, repellat cumque, saepe iure delectus dolore, inventore consequatur incidunt atque officiis vel id! Repellendus magnam officiis itaque dolorum ea, libero distinctio consectetur commodi magni placeat eos accusantium veniam laborum repellat hic dolorem mollitia facilis blanditiis laudantium rem neque eius culpa praesentium debitis? Eius excepturi nam, eum assumenda voluptates quibusdam corrupti consectetur hic, iusto quis, saepe laborum reprehenderit molestias quae odio aliquid praesentium suscipit dolores ex aperiam autem maiores. Nisi harum magnam quod distinctio voluptates possimus eum nemo numquam molestias minus unde amet quam, maiores consectetur labore quibusdam ad animi, nostrum suscipit, rem quo beatae. Officiis porro provident beatae, quae aliquid, reprehenderit ullam eos qui laboriosam eum totam dicta optio, sunt expedita! Esse laudantium voluptatem eius dolores molestias, officiis eum obcaecati rerum minus incidunt. Dignissimos voluptatum hic quidem officia cumque voluptatem, at odio nemo aspernatur esse porro animi totam doloremque cum accusamus fugiat, delectus, dicta amet sint unde soluta non! Harum voluptates dolorum impedit, similique eveniet voluptas consequuntur dolor, quisquam saepe soluta totam excepturi inventore architecto nisi ratione iste quod exercitationem. Modi repellendus dolorem cupiditate odio nostrum omnis deserunt nihil, nisi atque illum, accusantium quasi. Soluta illum at esse quam cupiditate, distinctio maiores necessitatibus quo ipsam numquam dolor expedita dignissimos neque voluptas quisquam natus, provident cum! Nisi, nesciunt? Vel fugiat exercitationem debitis quos quibusdam. Incidunt, quidem illum maxime perspiciatis rem eos necessitatibus recusandae nostrum nobis eius minus ipsa soluta sed iure ducimus distinctio laborum, dolores odit officiis. Ducimus, asperiores. Harum aliquam tempore odit iusto nesciunt reprehenderit quaerat, officiis facilis cumque pariatur perspiciatis deleniti voluptatibus voluptatum natus nulla aperiam voluptas provident, eius non laborum nisi fugit impedit molestias. Libero maxime consequatur voluptates est sequi dolore, laborum impedit vitae numquam alias, quod ad cum iusto atque id. Aliquam accusamus, doloremque ratione exercitationem tempore sint amet vitae molestiae eius itaque iusto. Facilis recusandae voluptatem architecto nihil rerum magnam, itaque minima illo deleniti? Tempore, aliquid sint eveniet quibusdam dicta, nihil, nesciunt dolores ratione blanditiis doloribus consequatur possimus accusantium a asperiores magni obcaecati soluta exercitationem. Voluptatibus voluptatem a fugit iusto laboriosam. Suscipit odit quis natus, ut voluptates provident sed vero reiciendis sunt autem delectus laborum vel alias quos placeat odio eum eligendi. Quas mollitia inventore voluptatum, iure repellat dignissimos adipisci delectus suscipit dolore veniam quibusdam rerum molestiae atque asperiores facilis cum aut repudiandae magnam? Voluptas minima distinctio mollitia aut quam aliquid, nobis laudantium perferendis. Expedita ut quam dolore nulla magnam fugiat sequi aspernatur earum, non eaque suscipit! Nulla, fugit?
    </Typography>

<ButtonGroup>

    <Button color='error' size='large' variant='contained'>Click me</Button>
    <Button color='warning' size='small' variant='outlined'>Click me</Button>
    <Button color='info' size='small' variant='contained'>Click me</Button>
    <Button color='success' size='small' variant='contained'>Click me</Button>
    <Button color='primary' size='small' variant='contained'>Click me</Button>
</ButtonGroup>

<Fab color="primary" aria-label="add">
        <AddIcCallRounded />
      </Fab>
    </>
  )
}

export default Homepage