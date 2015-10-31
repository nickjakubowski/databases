select username,roomname,text,messageID 
from messages m inner join users u on ( m.userID = u.userID ) inner join rooms r on ( m.roomID = r.roomID );



select userID from users where username = username

select roomID from rooms where roomname = roomname 

insert into messages values (0, userID, roomID, text)

insert into messages values (0, (select userID from users where username = 'greg'),
(select roomID from rooms where username = 'lobby'), 'asdfasdg');