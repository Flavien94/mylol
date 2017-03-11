<?php
include('init.php');
include('api/php-riot-api.php');
include('api/FileSystemCache.php');

$api = new riotapi('euw');
$api_cache = new riotapi('euw', new FileSystemCache('api/cache/'));

$postdata = file_get_contents("php://input");
if (isset($postdata)) {
  $request = json_decode($postdata);
  $api_username = str_replace(" ", "",strtolower($request->data));
  // $api_username = 'lowftwar';
  $r = [
    "summonerId" => $api->getSummonerByName($api_username)[$api_username]['id'],
    "summonerName" => $api->getSummonerByName($api_username)[$api_username]['name'],
    "summonerIcon" => str_replace(" ", "%20",$api->getSummonerByName($api_username)[$api_username]['name']),'%20',
    "summonerLvl" => $api->getSummonerByName($api_username)[$api_username]['summonerLevel'],
  ];

  // print_r ($api->getStats($r['summonerId'],'ranked'));
  // $test = $api->getStats($r['summonerId'],'ranked');

  $info = array(
    'id' =>$r['summonerId'],
    'name' =>$r['summonerName'],
    'icon' =>$r['summonerIcon'],
    'lvl' =>$r['summonerLvl'],
  );
  $data = array();
  for ($i=0; $i < count($info) ; $i++) {
      $data[$i]['id']    = $info['id'];
      $data[$i]['name']    = $info['name'];
      $data[$i]['icon']  = $info['icon'];
      $data[$i]['lvl']  = $info['lvl'];
      break;
    }
    header('Content-Type: application/json');
    $json = json_encode($data);
    echo $json;
}
