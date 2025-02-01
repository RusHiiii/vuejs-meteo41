<template>
  <BreadCrumb text="A propos" />

  <div class="fullwidth-block no-padding-top">
    <div class="container">
      <div class="row">
        <div class="fullwidth-block padding-content">
          <div class="content col-md-8">
            <div class="post single">
              <h2 class="entry-title">
                Informations sur la station de {{weatherStation?.city}}
              </h2>
              <div class="featured-image">
                <img src='/images/chambord.png' alt="Chambord" />
              </div>

              <div class="entry-content">
                <p class="description-about">
                  {{weatherStation?.description}}
                </p>
              </div>

              <div class="col-md-6">
                <h3 class="about-title-content">
                  La localisation de la station
                </h3>
                <div class="entry-content">
                  <ul>
                    <li>Ville: {{weatherStation?.city}}</li>
                    <li>Pays: {{weatherStation?.country}}</li>
                    <li>Altitude: {{weatherStation?.elevation}}</li>
                    <li>Latitude: {{weatherStation?.lat}}</li>
                    <li>Longitude: {{weatherStation?.lng}}</li>
                  </ul>
                </div>
              </div>

              <div class="col-md-6">
                <h3 class="about-title-content">Autre informations</h3>
                <div class="entry-content">
                  <ul>
                    <li>Modèle: {{weatherStation?.model}}</li>
                    <li>Référence: {{weatherStation?.reference}}</li>
                    <li>
                      Date de création:
                      <DateHelper
                        format="L"
                        :date="weatherStation?.createdAt"
                      />
                    </li>
                    <li>
                      Date de mise à jour:
                      <DateHelper
                        format="L"
                        :date="weatherStation?.updatedAt"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="sidebar col-md-3 col-md-offset-1">
          <div class="widget">
            <h3 class="widget-title">Les autres stations</h3>
            <ul class="arrow-list">
              <li>
                <a
                  target="_blank"
                  href="https://www.wunderground.com/dashboard/pws/ICHAIL9"
                >
                  Chailles
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.wunderground.com/dashboard/pws/ICELLETT3"
                >
                  Cellettes
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.wunderground.com/dashboard/pws/ITOURENS3"
                >
                  Tour-en-Sologne
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import BreadCrumb from "@/components/common/BreadCrumb.vue";
import DateHelper from "@/components/common/DateHelper.vue";
import {useCurrentWeatherStationReference} from "@/stores/weatherStation.ts";
import {useWeatherStation} from "@/hooks/weatherStationHook.ts";

const weatherStationReference = useCurrentWeatherStationReference();

const {data: weatherStation} = useWeatherStation(weatherStationReference);
</script>
