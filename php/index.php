<?php
include 'init.php';
include('api/php-riot-api.php');
include('api/FileSystemCache.php');

$api = new riotapi('euw');
$api_cache = new riotapi('euw', new FileSystemCache('api/cache/'));

$postdata = file_get_contents("php://input");
error_log($postdata);
if (isset($postdata)) {
  $request = json_decode($postdata);

  $api_username = $request->data;

  $r = [
    "summonerId" => $api->getSummonerByName($api_username)[$api_username]['id'],
    "summonerName" => $api->getSummonerByName($api_username)[$api_username]['name'],
    "summonerIconId" => $api->getSummonerByName($api_username)[$api_username]['profileIconId'],
    "summonerLvl" => $api->getSummonerByName($api_username)[$api_username]['summonerLevel'],
  ];

  $test = $api->getSummonerByName($api_username);
  preview($test);

  echo $r['summonerId'];

  function preview($tabs){
      echo "<pre>";
      echo print_r($tabs);
      echo "</pre>";
  }
}
