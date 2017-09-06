$json = array();

if(mysql_num_rows($result)){
        $row=mysql_fetch_assoc($result);
    while($row=mysql_fetch_row($result)){
        //  cast results to specific data types

        $json['testData'][]=$row;
    }
}