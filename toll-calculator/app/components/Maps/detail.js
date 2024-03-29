export const detail = 
  {
    "status": "OK",
    "summary": {
        "route": [
            {
                "location": {
                    "lat": 39.95209,
                    "lng": -75.16219
                },
                "address": "Curious Designs, Market St, Philadelphia, PA 19107, United States"
            },
            {
                "location": {
                    "lat": 40.71465,
                    "lng": -74.00708
                },
                "address": "85 Chambers St, New York, NY 10007-1807, United States"
            }
        ],
        "countries": [
            "USA"
        ],
        "currency": "USD",
        "vehicleType": "2AxlesAuto",
        "vehicleDescription": "Car, SUV or Pickup truck without 4 tires on rear axle",
        "fuelPrice": {
            "value": 3.65,
            "currency": "USD",
            "units": "USD/gallon",
            "fuelUnit": "gallon"
        },
        "fuelEfficiency": {
            "city": 23.4,
            "hwy": 30,
            "units": "MPG",
            "fuelUnit": "gallon"
        },
        "units": {
            "currencyUnit": "USD",
            "fuelEfficiencyUnit": "MPG",
            "fuelUnit": "gallon"
        },
        "departure_time": "2023-12-13T12:46:32.768489461Z",
        "departureTime": "2023-12-13T12:46:32.768489461Z",
        "share": {
            "name": "curious designs, market st, philadelphia, pa 19107, united states-85 chambers st, new york, ny 10007-1807, united states",
            "prefix": "curious+designs%2C+market+st%2C+philadelphia%2C+pa+19107%2C+united+states-85+chambers+st%2C+new+york%2C+ny+10007-1807%2C+united+states",
            "uuid": "9b7fa0ad-28be-4755-8e04-bfa9532bb70a",
            "timestamp": "2023-12-13T12:46:32.768497332Z",
            "client": "api"
        },
        "source": "HERE"
    },
    "routes": [
        {
            "summary": {
                "hasTolls": true,
                "hasExpressTolls": false,
                "diffs": {
                    "cheapest": 7.79,
                    "fastest": 0
                },
                "url": "https://www.google.com/maps/?saddr=39.952090,-75.162190&daddr=39.957710,-75.162450+to:39.956890,-75.152910+to:40.117020,-74.830580+to:40.096670,-74.737420+to:40.345130,-74.475850+to:40.346430,-74.475260+to:40.714532,-74.007119+to:40.714650,-74.007080&via=1,2,3,4,5,6,7",
                "distance": {
                    "text": "93 mi",
                    "metric": "150 km",
                    "value": 150908
                },
                "duration": {
                    "text": "1 h 51 min",
                    "value": 6715
                },
                "name": "I-95"
            },
            "costs": {
                "tagAndCash": 30.14,
                "minimumTollCost": 30.14,
                "fuel": 11.67,
                "tag": 30.14,
                "cash": null,
                "licensePlate": null,
                "prepaidCard": 30.14
            },
            "tolls": [
                {
                    "type": "ticketSystem1",
                    "tagCost": 15.39,
                    "tagPriCost": 15.39,
                    "tagSecCost": 15.39,
                    "cashCost": 15.4,
                    "licensePlateCost": null,
                    "prepaidCardCost": 15.39,
                    "currency": "USD",
                    "tagPrimaryNames": [
                        "E-ZPass NJ"
                    ],
                    "prepaidCardNames": [],
                    "tagPrimary": [
                        "E-ZPass NJ"
                    ],
                    "tagSecondary": [
                        "E-ZPass",
                        "E-ZPass DE",
                        "Uni",
                        "I-Pass",
                        "E-ZPass Skyway",
                        "E-ZPass IN",
                        "RiverLink",
                        "E-ZPass ME",
                        "E-ZPass MD",
                        "E-ZPass MA",
                        "MnPass",
                        "E-ZPass NH",
                        "E-ZPass NY",
                        "E-ZPass NC",
                        "E-ZPass OH",
                        "E-ZPass PA",
                        "E-ZPass RI",
                        "E-ZPass VA",
                        "E-ZPass WV",
                        "E-Zpass Flex"
                    ],
                    "licensePlateNames": [
                        "Tolls by Mail"
                    ],
                    "discountCarDetails": "Other discounts: 65+ Senior citizens receive a 10% discount on the off-peak rate as Senior Citizen Discount. Vehicles with fuel efficiency 45 MPG and meeting California Super Ultra Low Emission Vehicle (SULEV) standard receive a 10% discount on the off-peak rate as Green Pass Discount. Must have NJ E-ZPass.",
                    "discountCarType": "Cars",
                    "start": {
                        "id": 126001000,
                        "lat": 40.097127,
                        "lng": -74.777325,
                        "name": "6 - PA Turnpike/Florence",
                        "road": "New Jersey Tpke",
                        "state": "NJ",
                        "country": "USA",
                        "arrival": {
                            "distance": 42639.77,
                            "time": "2023-12-13T13:19:46Z"
                        },
                        "timestamp_formatted": "2023-12-13T14:20:07Z",
                        "timestamp_localized": "2023-12-13T09:20:07-05:00",
                        "point": {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": [
                                    -74.777325,
                                    40.097127
                                ]
                            }
                        }
                    },
                    "end": {
                        "id": 126004000,
                        "lat": 40.706563,
                        "lng": -74.06214,
                        "name": "14C - Holland Tunnel",
                        "road": "New Jersey Tpke",
                        "state": "NJ",
                        "country": "USA",
                        "arrival": {
                            "distance": 142175.08,
                            "time": "2023-12-13T14:20:07Z"
                        },
                        "timestamp_formatted": "2023-12-13T14:20:07Z",
                        "timestamp_localized": "2023-12-13T09:20:07-05:00",
                        "point": {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": [
                                    -74.06214,
                                    40.706563
                                ]
                            }
                        }
                    },
                    "height": null,
                    "tagRequested": "tagPriCost"
                },
                {
                    "id": 111900000,
                    "lat": 40.730217,
                    "lng": -74.038654,
                    "name": "HT : Holland Tunnel",
                    "road": "Holland Tunnel",
                    "state": "NJ",
                    "country": "USA",
                    "type": "barrier",
                    "tagCost": 14.75,
                    "tagPriCost": 14.75,
                    "tagSecCost": 17,
                    "cashCost": null,
                    "licensePlateCost": 17,
                    "prepaidCardCost": 14.75,
                    "currency": "USD",
                    "tagPrimaryNames": [
                        "E-ZPass NY",
                        "E-ZPass NJ"
                    ],
                    "prepaidCardNames": [],
                    "tagPrimary": [
                        "E-ZPass NY",
                        "E-ZPass NJ"
                    ],
                    "tagSecondary": [
                        "E-ZPass",
                        "E-ZPass DE",
                        "Uni",
                        "I-Pass",
                        "E-ZPass Skyway",
                        "E-ZPass IN",
                        "RiverLink",
                        "E-ZPass ME",
                        "E-ZPass MD",
                        "E-ZPass MA",
                        "MnPass",
                        "E-ZPass NH",
                        "E-ZPass NC",
                        "E-ZPass OH",
                        "E-ZPass PA",
                        "E-ZPass RI",
                        "E-ZPass VA",
                        "E-ZPass WV",
                        "E-Zpass Flex"
                    ],
                    "licensePlateNames": [
                        "Tolls by Mail"
                    ],
                    "discountCarDetails": "Discounts: Carpool plan and Green Pass discounts available. Contact Port Authority for details.",
                    "discountCarType": "Class 1, Class 11",
                    "arrival": {
                        "distance": 146333.48,
                        "time": "2023-12-13T13:54:26Z"
                    },
                    "timestamp_formatted": "2023-12-13T13:54:26Z",
                    "timestamp_localized": "2023-12-13T08:54:26-05:00",
                    "point": {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                -74.038654,
                                40.730217
                            ]
                        }
                    },
                    "height": null,
                    "tagRequested": "tagPriCost"
                }
            ],
            "polyline": "kdzrFpbwiMC`@EJGLIHOHi@Gs@KOAI?K@EBGDGHGJENCRCZKhAUAi@?YEQCaBS{ASyASICwAQqAQoAQYCeBWwAQBc@FcBL{BB]LiBDc@Bk@F}@@{AE}@Fq@@KRgCTmDZqELkBPeCHkB@aAAw@EmAAYGy@M_AO{@Ki@Ki@Ia@Oy@Y_BOy@OaAKaBEgAA_A?u@D_APyBRsBBQBOVcCZ{Cd@wDToBPyADe@BSBUBUDm@@S@Y@c@?k@Ac@C]Im@Kk@Ok@Qa@OWQW[g@MOWUQMSMQI[K]Ge@E{AEmAEu@CiAE]A}B@QEWGgAW_AYk@SoAk@u@]_Ag@wAy@eBkAy@m@s@m@aAw@q@o@q@q@c@c@Y[s@y@q@_Aa@o@g@}@c@aAc@iA]gAYiA[{AY}A_@mBQ{@_AyEo@eDq@eD]eB]aBWiA[qAa@uAY}@]_Am@wA[o@[k@Ue@kBsDq@kAg@{@aAcB{@{Ae@w@g@aAWc@[k@aAqBq@_B_AyBkAkC}BwFaA}BYq@iAmCs@mBm@{A_AqB_BqDaD}H{AmDmAuC_@}@o@{Aq@aBWq@]cAYaAUy@Om@c@oBQ}@UwA]gBWsA]eBc@kB_@wAa@sAi@aBs@sB_@eAcAsCcBkEs@gB_@_A_@aAkAaDoBsF{BqG_@eAi@yAa@gAUk@Sg@Ys@cAcCi@oAm@wAO]s@{AwBqFaA{BsA_Dq@wAaAmBQY]i@]g@]e@iAyAMQs@u@kAeAg@_@m@c@cAo@sBiA[Sy@c@qAs@wAu@aCwAg@[e@Yk@_@{CqB}B}AmCiB}@q@g@_@k@a@g@[KI]SOKSOUO_@WiAu@q@c@]SsBoAiBmAsDeC_EmCaK}GwAaA}@o@i@a@u@m@{@u@y@w@eAgAeAiAs@y@[_@[a@_@e@i@u@[e@[g@g@y@Ye@KQoAaC]s@IQQc@w@kBWs@EKGQg@wAWy@c@yAe@wBYsAO}@GYEYMcAKaA]aD_@cD[gCSsA]iBYqAEO]wAc@yAm@iBm@}AwCwGeG{MuA_D}@yBoB_FsJoVwGmPiBuEmDyIqAkDqAgDkDuJmAqDc@_B[qAm@kCs@}CcBiHw@aDeA_Fk@aDk@kDQgAa@iC_@}Bc@mC_@sBe@uBSq@Oe@U}@[eAGQg@qAs@gB{@kBsAsCWk@MYIQEKqAsCw@gB_AkBGMqBoEw@_B]q@c@u@a@g@y@aAy@w@u@m@q@c@_@Si@Wg@Se@QWKoA]wC_A{Bq@cAa@o@]o@_@a@Ya@[m@g@YYg@i@i@i@[_@UYc@o@c@q@_@q@c@}@o@yAq@_Bi@wAg@_BaAaD_AeDg@kBuAoFiAiEq@cCyCiL_@wAc@}Ai@eBa@gAe@kAm@sAq@qAm@eAs@gA{@kA_@g@c@i@{@}@iAgAu@o@k@c@m@a@k@_@m@]a@Sc@Sg@Sm@UsAk@iBu@wAo@uAs@YOiAs@GEi@c@o@i@y@w@o@s@q@{@i@q@e@w@_@m@a@{@g@eAi@uA_@kA_@_BWaAUgAScAKs@SsAc@mDWyBK{@_@wC]uBYeB[wAQs@Sw@_@sA[aAYy@Yu@Yw@Um@m@sAw@{AkAuBa@m@_@i@aAsAc@i@gAoAcAeAqAoAu@q@_@]kCaC}AyAoDeDWUy@{@qAuAuAyA_AeAg@q@]e@{@qAg@y@s@oAk@gAy@gB_A}Bi@uAiEiLgFeNiDeJqAoDe@kAYw@s@mBQg@kBwEMYc@}@g@eA{@aBoBgDw@uAaDgEgC_D{AeBiAyAeA_Ba@s@}@gBw@iBc@iAGO_@kAUw@YiAOm@S{@Q}@Kk@a@oCGk@UcBGa@AKKq@w@kFs@_EmAuFMi@WcASu@U{@[kAK]IWMa@o@oBUq@Yw@m@cBu@mBi@qA]y@a@_Ae@cAa@y@g@cAa@u@y@{AaAgBgAqBgE_I_CiE}CwF}CsFm@eAg@{@q@iAm@aAcAaB}AgC}BqDeGwJWc@_@q@We@Wg@[o@Ym@Ug@q@}AqBsEuB_FMYO]aBoD{BuE}A}CuE_JoIyOoEcIiAoBsBwCo@{@i@q@]a@OOgAkA}A_BqAoA{BoBoAgAyCmCcA}@w@u@aAaA_AcAu@aAeAuA{A{B_A}AqBsDeDgGuCoFIOiAuB_@q@oBsDyAmCcAkBa@w@aAmB_@{@w@wBY_AW_Ae@aCk@eDYeB]oBYiBKu@Mu@a@eCy@aFYiBg@eCk@aCq@{Bs@yBq@eByAgDiCgEiA_BoA{A}@cA}@{@sAmAkBuA_@Yi@_@m@]w@]}As@iBw@uAe@w@U_AYgBi@iBk@eCy@_Cu@eDaAa@MeCk@_B[oCe@i@Io@I{AQWC[CcBMy@Ek@Ck@Cg@M[GUCMAs@Eq@Eg@CeAEa@Au@?y@B{ADaGHm@@y@Ac@Cg@Gc@Ge@K]Ka@O_@OWMYO[SWSUQ[YYYQQUWSYU]Q[Q]Q]Qa@KWM_@Ma@Me@Mg@GYG_@Ga@E[E_@CUCWC[AWA_@Ao@?e@@s@@m@@[Be@B]BWFe@Fa@Jk@Ji@P{@VkAR}@TeARaAHc@Hg@Fa@Fe@D]Da@Fo@Fs@Fs@JoAh@yGb@wFf@kGPsBZqDRyBJgADe@Dc@D_@D[DYDWPcAJiAb@sFp@gIXiDLyBBi@VmDjA_OPaCFu@T}CF_AJ}AJ{Aj@aHd@oGVuCHu@LcAFc@BKBONeAb@mCt@_Ep@oDh@sC^kBHc@Ny@z@yEp@sDN}@Nu@b@wBRcARgATgAv@mE\\iBVwAHa@Ny@rCkOf@qCF[BQX{AnBoKhAkGl@aDj@wCj@_DnBiKvBkLbAuFxAaIbAoFbAsFvBgLP}@p@qDNu@fBkJr@sDp@oDr@qDVuAlAqGx@iEXyAfAoFd@wBf@wBf@uBl@_C~@iDp@aClAwDjAiDt@qBv@qBpAaDv@mB`@_ATe@t@cBjG_ObB}Df@mAXo@pAyCn@}ATg@|FcN`A}B^{@N[p@_BxEeLzAsDfAmC`@eAjAaDzAmEd@wAj@gBf@_B\\iAbAmDV}@hAwDHWn@eCNk@b@yAPo@Ni@n@eCd@qBZyAP{@Ls@V}AN_Aj@kEHw@`@uDFo@LsAp@aHZ}CN{Aj@_Hl@uJR}C\\kINyEJ{EF}EB{E?cHCyEG{EIkDQ}GKgCUyEs@uLIuAcAaPo@gKg@yHe@yHk@cJG{@[_Fa@qGAQQoCIsAaAgOAQw@kLG{@SaD]oCSoAWmASaAa@wAWy@Um@e@iA_@s@g@{@k@{@u@_AyA{AeHeHm@m@{CsCsCkCeCwBi@a@o@_@u@u@sCqCmCkCgPcPcJiJ_FiFsB{BsB{BwBcC_KiLqH_JaCyCoEwFqBkC_@g@cFyGqCwDqD}Ey@gASW[a@sAiBcCeDeB}Be@o@qJqMiEwFGIwEuGq@_AeAuAyCcEsPaUoBkCkX}^{EqGcN_Rw@eAsK{Nkw@ueAgJeMuDcFuYm`@u@cAgA{AaAqAW]W]W]kFiHqBoCaLiOkFkH{@oAw@kA]e@wByC}BoDiCaEkB{C_C{DeCiEqBoDoCcFcCwEoBwDmB}DyBqEgCqFyBwE_JsRcTqd@s@{A}G_OiDkHeHkOSc@_GgMoH{O}EiK}FaM_AqBmBcEcBqDcAyBeDeHgD{GWg@iAqBs@mAwA}Be@w@yAaCeEaHuE{H{HeM_N}T}ByDmEaH}EcIkIcNuC{EoO}VwDkGuNyU_MiSgBuCcEaHeHgLwFiJoOaWiLeRwFgJ}G_LkEiHoBaDiDwFaDiFiB_DoAwByAqCkAuBeAyBiAaCaAsBkB{Du@aBeBsD{B_FwLgWuJuS_MsWqD}HwBuEwBoE{AwCuAeCoAwByA_CsB{CgBcCsAeBo@w@wAgByBcC_@_@gBiBmAiAoAiAoBcBuBcBeAw@mCmBcBeA{A_AqBiAsAu@mAm@wAq@}BcAiAe@{@[sDqAqBo@_D}@}Ac@cD_AwBm@o@SsJmC_KsCmCu@KCiBg@cL_DgHqBeI}BGAMC]KOEuA_@sAa@wAa@{C}@aBi@iBm@gA_@iEyAsCaA{By@YKqDmA}LeEqDkA_FcBeC{@iC}@eNwEaBk@iC{@qAc@sL_EoQgGaTiHoIqCoAa@_YgJsWyIs\\{KmKmDgBo@m@UcE}Ai@SmM{EiPgGsEaBcBm@wDmAcDeAa@M{DgA{EsAqBg@aEeAa@K]KkDaAs@SqAa@wDoAcFgBwWaJmE{AqE}AmDqA{@YuAe@yCeA{DsAuFoBuDqA}MwE{DqAgDiAe@Qq@UcGuBa]wLiTqHkC_AcIsCqFiBoCaA{@[_DkA{DkAiCw@yO}EwGoBsDgA{Ac@iGkBaDaAeEoAuEwAkJuCiA]q@UuC_AaKwCk@Qi@QiBk@eYoIwd@mNyGsBiF_BsR_Gk@Q_HsBkW}HcA[_Be@yBo@mCw@aRgFaAY[IaD{@eBc@}@Uw@SyEmAuKuCm@Q_D{@eFeBwCaAmCcA_DoAyDaBqB}@qEuB_CkA_FeCkBcAu@c@yBoA{A}@_CwAuA{@eDsBsA}@mBqAs@g@yAcAeAu@{AgAmCiBy@m@m@c@wBaBgE_D}@o@sEgDq@e@qEcDiBsAaAs@}@o@u@g@SMeAs@gDyBoBqAaC}AyAaAcAq@gAu@}LeIgLwHo@a@yBqA_B_AyAu@u@a@wBgAiAk@cCmAyBgAsDiBiCoAsAq@wBgAi@Ws@_@wAs@o@[g@W_HkDiAk@oDcBsIiEuHwDc@U}Au@eAk@}CyAkE{BaEmByEaCkCqAyMwGkCuAeDcBqFuCmDiB}CaBmE_CeAo@kDiBYO_J{E}DqBiDeBaB}@c@Yi@_@_BkAeBsAqB}Aq@e@eAu@q@g@g@_@a@Y{@o@qA}@{AcAkCcBmCcBi@]KGgAs@iBkAkAu@k@_@g@[k@g@{@s@i@]gDmBkCiBqAaAYS_Ao@yAkA{@u@gA}@gA_AcB}Ao@k@c@a@[Y[[m@k@qAwA{AeBu@y@q@w@_@e@cAmAeCuCMOa@e@wRaUKMuIeK}KgMoI}JcKsLy@_A{A_BeAmAaCqCiAsAaBkBwCiDuCgDyAeB{BkCu@{@SUOSyAcBeAkAoAyAkEcF_CqCuBcCaEyEwAaBy@_AgBsBa@g@kAuA{BkCuDoEiBcCgCoDiAaBiAgBcBoCWc@aAeBsAeC_AeBcAsBgCsFiBiEk@yAi@uAQg@qAmDcA}CsAwEiBoGaDmLcAoDgCcJeAuDcBaGK_@o@yBu@kCkBiGyBmHo@sBa@oAGSq@uBu@}Ba@kAk@_B}A_EwAeDg@cAq@yAiAyBm@kAa@u@_@s@Q]g@_AwAiCcBwCk@eAoAoBs@kAcCeEyFoJaCaE_BqCiAsB_AkBsBgEwB}EaCcG}@aCyBkGo@sBiBuG_BkG[qAQs@Kc@o@oCg@cCq@cD_@kBa@sB_@sBSkAy@}Eg@oDWmBOuAAMQ{AIu@Gm@c@kFEe@Eq@C]KqAYcESyC]eFEs@Cg@UuDc@sGQsCGw@c@aGQ}B]aEKiAU{CMaB[uDOeBS{BKaA]{C_@uDe@kDIg@mAqH}@oFKk@a@uB[uA}AqGaAsDoAmEu@gCW{@_@iA}C{Ic@kAsAiDy@gBk@qAOYEGSe@Wi@g@gAaAoB[m@oAcC{AuCYg@a@y@_ByCcCuEs@uAe@{@aBcDc@y@i@cA[m@i@eAkDoGcCcEw@oAe@u@OUUa@g@s@wAsBkBiCk@u@e@k@uBiCoB}B_CiCkAmAwFmFmCeCmG{FqEqEu@s@[Ye@c@sCiCuH{GSQoEgEgDuCyAsAIIoAkA_A{@eHsGuFiFmDcDcDwCsDiDuG_GkEqD}BgBiDgCgCkBy@k@{AcAgCaBiCaB{BsA_E}BqBiAoHeEkDoB{GyDiEcCiAm@uBkAuBeAmEyBmCsA}@c@qHeEsCcB_CwAIGoCeBoCcBcDgBs@_@sBgAu@a@_@ScAg@kAm@_@SoAo@aFiCyMyGaAg@}BkAeAi@kGaDqCuAs@[yBoAECm@[{MaHmIgEkKqFgEwB]Qc@UkAq@iB}@UKQKGCaCgAkDeBoG_DgIcEiK{FkG}C}GgDqCwAsC{AkFsCOIcAk@eAk@sC}AaCqA}BoAmAo@e@WqFqCaDcBuGiDeFiCaB{@]Q{BiAQIuBiAwBgAuFuC_@SoBaAaAe@s@_@g@WyCyA}EaCuCqA_E_Ba@Q{@a@aAe@o@[}A{@m@a@}@o@iA_AuBgB{@_Ai@m@}AmBs@cAu@kAe@w@e@y@Uc@o@wAcAyBo@uAg@iAc@_Am@sAs@aBc@aAq@yAk@qAc@}@a@cAs@}Ac@aAm@qAqAyCaBmD{@iBu@qA_A}Ai@u@o@y@mAyAoAsAmAgA_Aw@aAq@y@k@oCaBgCyAMIm@_@mBkAa@YQKs@c@g@[_@Ua@UgAo@yBsAiAq@_BcA_BeAgCiBqDoCwBkBmCaCOO_CqBgCaCaB}AWUuCkCiBeBWUq@m@wAqAoBiBwEkE_GoFkJuIo@e@i@c@aAs@}@o@yDgCuA{@w@e@cC{AcP{JcHiEmCaBqJ_GoG}DkDwBsBoAmDwBg@]a@Ye@UYOgAs@}ByAiCaBo@a@uDaC{ByAYSmD_CgHyEoD_CeEgCUM{@g@qDqBi@Yq@k@]We@Yi@[yAy@_Ag@}As@eBw@iAg@eAk@eAo@i@g@q@o@g@o@w@{@gAgAoAcAwAcAs@g@UOs@e@MMKMIOQ]K[G_@@oA?IJe@BOf@gCJg@Ns@F]BW@_@XcAZgA^kA~@cCN_@Pg@p@eB|@{BJWNa@v@yBVy@j@eBNk@ZiAPo@lAaFr@wCrAsF|AoHTeArEuTvH__@pAkGjCiMl@wCj@mCnDyPxBmK\\eB|AyHpAmG|DkRpBsJReAJe@f@aCxAeHNu@tAyGViA^gB\\qAT_AFQJY^cAp@eBn@sA^o@HOp@gAT[fA{AfA{AvAiBz@gA^i@\\c@X]TWTWTWTYPSNSNUNWP]P_@N[LYLYLYJYHWLa@HYFUDQF[DSDUDUBQBQBQBSDc@Da@B]B]B_@@S@]@cA?e@?e@Aw@Cq@Ce@Ce@ASEg@CWE]Ge@Ga@Gc@EYG_@Ic@Ki@Kg@I]Kc@I]Ka@YgAk@eBg@yAUm@Qc@q@{AWk@qAgCi@}@u@kAa@o@k@u@_AmA_AcAaAeAk@k@kEmEsBsB{B}BuAwAgAkAaBaBsDwDuByBUWu@}@q@}@o@_Am@aAcAcBc@{@Ym@w@eBy@qBq@oBe@{A[iAKa@[wAqAqGMo@k@wCiA{EU{@g@_Be@mAg@oAk@mAm@mA_@q@e@y@{@mAoAeBuA}AwAwA_A}@MMq@q@gDeDOOWWu@{@a@g@_AwAi@cAUi@Wk@}AkDe@cAa@}@]y@e@cA_AaB[u@Yk@k@sAc@eAe@iAc@iAYs@w@mB{@yB}@yBc@eAQ_@Q_@MWMUMUKQKOOSQUOQSSSSSQUQQMMIQKQKMGWMSIOGQGWIYIWGSESEMCWEQCUC]Cc@CYAiAAaAJy@NaAZ{An@_Ah@KFKFIDMFoB|@IDUJ}An@e@N_@Jo@J_@Di@FqADsAAcAEkBSkAQ}@QyA_@yA_@kCo@yDaAkCq@i@MUGc@Ka@KICYGoA[{Cw@uG_BcCm@o@QmEeAa@KyBk@m@Qc@MQGUIOGOGQIQIOIQKMIOKQMKIOMQQOQIKIMGKGMEKEMIWGWGYEUCQCSCWC[AOAWAa@?c@?c@@q@@o@@m@DqB^iIBo@DaAPcD@_@@g@Fy@HaB@YF}A@S@[FmABk@Bi@JwBBk@Di@Dm@Fq@B[BUFu@FuAJgC@]FuA@e@@aA@eC?SByAL{ALaAD_@F[PqANkALs@VkBL_APqAn@qELkAHaB@c@PkE`A}UJiBTeCdAcLNsAR{BTiCDg@JaAFo@VkCb@mEj@iGRoBNaBVqFf@eLRoDNoARaAXcALYTm@j@cAVc@bA{AzA_ChAgBj@}@|@gAX_@NSb@k@f@u@`@m@Xc@T_@LSNQJGLGNEJAP?L@H@PFHDNJLNFJFLDT@P?X?X@b@@P@JBLDLFJHJHFHDHBH@H?JAJCHEHGLMFKDMDQBU@K?KAMAICMCKEMKSGIGIIKCGCIAGA[|@Jl@F^D`CX|@HdAHJ@pAPf@FP@RAd@Zn@b@`@`@jBtAhBrArBxAbBjAzB{FfAiD"
        },
        {
            "summary": {
                "hasTolls": true,
                "hasExpressTolls": false,
                "diffs": {
                    "cheapest": 0,
                    "fastest": 31.15
                },
                "url": "https://www.google.com/maps/?saddr=39.952090,-75.162190&daddr=39.957710,-75.162450+to:39.956890,-75.152910+to:40.190740,-74.881320+to:40.209140,-74.767610+to:40.295800,-74.681060+to:40.481320,-74.419890+to:40.477530,-74.410220+to:40.714532,-74.007119+to:40.714650,-74.007080&via=1,2,3,4,5,6,7,8",
                "distance": {
                    "text": "92 mi",
                    "metric": "148 km",
                    "value": 148689
                },
                "duration": {
                    "text": "2 h 23 min",
                    "value": 8584
                },
                "name": "US-1"
            },
            "costs": {
                "tagAndCash": 21.96,
                "minimumTollCost": 21.96,
                "fuel": 12.06,
                "tag": 21.96,
                "cash": null,
                "licensePlate": null,
                "prepaidCard": 21.96
            },
            "tolls": [
                {
                    "type": "ticketSystem1",
                    "tagCost": 7.21,
                    "tagPriCost": 7.21,
                    "tagSecCost": 9.61,
                    "cashCost": 9.65,
                    "licensePlateCost": null,
                    "prepaidCardCost": 7.21,
                    "currency": "USD",
                    "tagPrimaryNames": [
                        "E-ZPass NJ"
                    ],
                    "prepaidCardNames": [],
                    "tagPrimary": [
                        "E-ZPass NJ"
                    ],
                    "tagSecondary": [
                        "E-ZPass",
                        "E-ZPass DE",
                        "Uni",
                        "I-Pass",
                        "E-ZPass Skyway",
                        "E-ZPass IN",
                        "RiverLink",
                        "E-ZPass ME",
                        "E-ZPass MD",
                        "E-ZPass MA",
                        "MnPass",
                        "E-ZPass NH",
                        "E-ZPass NY",
                        "E-ZPass NC",
                        "E-ZPass OH",
                        "E-ZPass PA",
                        "E-ZPass RI",
                        "E-ZPass VA",
                        "E-ZPass WV",
                        "E-Zpass Flex"
                    ],
                    "licensePlateNames": [
                        "Tolls by Mail"
                    ],
                    "discountCarDetails": "Other discounts: 65+ Senior citizens receive a 10% discount on the off-peak rate as Senior Citizen Discount. Vehicles with fuel efficiency 45 MPG and meeting California Super Ultra Low Emission Vehicle (SULEV) standard receive a 10% discount on the off-peak rate as Green Pass Discount. Must have NJ E-ZPass.",
                    "discountCarType": "Cars",
                    "start": {
                        "id": 126002200,
                        "lat": 40.477735,
                        "lng": -74.408135,
                        "name": "9 - New Brunswick/Admin Bldg",
                        "road": "New Jersey Tpke",
                        "state": "NJ",
                        "country": "USA",
                        "arrival": {
                            "distance": 95665.89,
                            "time": "2023-12-13T14:23:18Z"
                        },
                        "timestamp_formatted": "2023-12-13T14:54:59Z",
                        "timestamp_localized": "2023-12-13T09:54:59-05:00",
                        "point": {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": [
                                    -74.408135,
                                    40.477735
                                ]
                            }
                        }
                    },
                    "end": {
                        "id": 126004000,
                        "lat": 40.706563,
                        "lng": -74.06214,
                        "name": "14C - Holland Tunnel",
                        "road": "New Jersey Tpke",
                        "state": "NJ",
                        "country": "USA",
                        "arrival": {
                            "distance": 139859.34,
                            "time": "2023-12-13T14:54:59Z"
                        },
                        "timestamp_formatted": "2023-12-13T14:54:59Z",
                        "timestamp_localized": "2023-12-13T09:54:59-05:00",
                        "point": {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": [
                                    -74.06214,
                                    40.706563
                                ]
                            }
                        }
                    },
                    "height": null,
                    "tagRequested": "tagPriCost"
                },
                {
                    "id": 111900000,
                    "lat": 40.730217,
                    "lng": -74.038654,
                    "name": "HT : Holland Tunnel",
                    "road": "Holland Tunnel",
                    "state": "NJ",
                    "country": "USA",
                    "type": "barrier",
                    "tagCost": 14.75,
                    "tagPriCost": 14.75,
                    "tagSecCost": 17,
                    "cashCost": null,
                    "licensePlateCost": 17,
                    "prepaidCardCost": 14.75,
                    "currency": "USD",
                    "tagPrimaryNames": [
                        "E-ZPass NY",
                        "E-ZPass NJ"
                    ],
                    "prepaidCardNames": [],
                    "tagPrimary": [
                        "E-ZPass NY",
                        "E-ZPass NJ"
                    ],
                    "tagSecondary": [
                        "E-ZPass",
                        "E-ZPass DE",
                        "Uni",
                        "I-Pass",
                        "E-ZPass Skyway",
                        "E-ZPass IN",
                        "RiverLink",
                        "E-ZPass ME",
                        "E-ZPass MD",
                        "E-ZPass MA",
                        "MnPass",
                        "E-ZPass NH",
                        "E-ZPass NC",
                        "E-ZPass OH",
                        "E-ZPass PA",
                        "E-ZPass RI",
                        "E-ZPass VA",
                        "E-ZPass WV",
                        "E-Zpass Flex"
                    ],
                    "licensePlateNames": [
                        "Tolls by Mail"
                    ],
                    "discountCarDetails": "Discounts: Carpool plan and Green Pass discounts available. Contact Port Authority for details.",
                    "discountCarType": "Class 1, Class 11",
                    "arrival": {
                        "distance": 144018.48,
                        "time": "2023-12-13T14:42:09Z"
                    },
                    "timestamp_formatted": "2023-12-13T14:42:09Z",
                    "timestamp_localized": "2023-12-13T09:42:09-05:00",
                    "point": {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                -74.038654,
                                40.730217
                            ]
                        }
                    },
                    "height": null,
                    "tagRequested": "tagPriCost"
                }
            ],
            "polyline": "kdzrFpbwiMC`@EJGLIHOHi@Gs@KOAI?K@EBGDGHGJENCRCZKhAUAi@?YEQCaBS{ASyASICwAQqAQoAQYCeBWwAQBc@FcBL{BB]LiBDc@Bk@F}@@{AE}@Fq@@KRgCTmDZqELkBPeCHkB@aAAw@EmAAYGy@M_AO{@Ki@Ki@Ia@Oy@Y_BOy@OaAKaBEgAA_A?u@D_APyBRsBBQBOVcCZ{Cd@wDToBPyADe@BSBUBUDm@@S@Y@c@?k@Ac@C]Im@Kk@Ok@Qa@OWQW[g@MOWUQMSMQI[K]Ge@E{AEmAEu@CiAE]A}B@QEWGgAW_AYk@SoAk@u@]_Ag@wAy@eBkAy@m@s@m@aAw@q@o@q@q@c@c@Y[s@y@q@_Aa@o@g@}@c@aAc@iA]gAYiA[{AY}A_@mBQ{@_AyEo@eDq@eD]eB]aBWiA[qAa@uAY}@]_Am@wA[o@[k@Ue@kBsDq@kAg@{@aAcB{@{Ae@w@g@aAWc@[k@aAqBq@_B_AyBkAkC}BwFaA}BYq@iAmCs@mBm@{A_AqB_BqDaD}H{AmDmAuC_@}@o@{Aq@aBWq@]cAYaAUy@Om@c@oBQ}@UwA]gBWsA]eBc@kB_@wAa@sAi@aBs@sB_@eAcAsCcBkEs@gB_@_A_@aAkAaDoBsF{BqG_@eAi@yAa@gAUk@Sg@Ys@cAcCi@oAm@wAO]s@{AwBqFaA{BsA_Dq@wAaAmBQY]i@]g@]e@iAyAMQs@u@kAeAg@_@m@c@cAo@sBiA[Sy@c@qAs@wAu@aCwAg@[e@Yk@_@{CqB}B}AmCiB}@q@g@_@k@a@g@[KI]SOKSOUO_@WiAu@q@c@]SsBoAiBmAsDeC_EmCaK}GwAaA}@o@i@a@u@m@{@u@y@w@eAgAeAiAs@y@[_@[a@_@e@i@u@[e@[g@g@y@Ye@KQoAaC]s@IQQc@w@kBWs@EKGQg@wAWy@c@yAe@wBYsAO}@GYEYMcAKaA]aD_@cD[gCSsA]iBYqAEO]wAc@yAm@iBm@}AwCwGeG{MuA_D}@yBoB_FsJoVwGmPiBuEmDyIqAkDqAgDkDuJmAqDc@_B[qAm@kCs@}CcBiHw@aDeA_Fk@aDk@kDQgAa@iC_@}Bc@mC_@sBe@uBSq@Oe@U}@[eAGQg@qAs@gB{@kBsAsCWk@MYIQEKqAsCw@gB_AkBGMqBoEw@_B]q@c@u@a@g@y@aAy@w@u@m@q@c@_@Si@Wg@Se@QWKoA]wC_A{Bq@cAa@o@]o@_@a@Ya@[m@g@YYg@i@i@i@[_@UYc@o@c@q@_@q@c@}@o@yAq@_Bi@wAg@_BaAaD_AeDg@kBuAoFiAiEq@cCyCiL_@wAc@}Ai@eBa@gAe@kAm@sAq@qAm@eAs@gA{@kA_@g@c@i@{@}@iAgAu@o@k@c@m@a@k@_@m@]a@Sc@Sg@Sm@UsAk@iBu@wAo@uAs@YOiAs@GEi@c@o@i@y@w@o@s@q@{@i@q@e@w@_@m@a@{@g@eAi@uA_@kA_@_BWaAUgAScAKs@SsAc@mDWyBK{@_@wC]uBYeB[wAQs@Sw@_@sA[aAYy@Yu@Yw@Um@m@sAw@{AkAuBa@m@_@i@aAsAc@i@gAoAcAeAqAoAu@q@_@]kCaC}AyAoDeDWUy@{@qAuAuAyA_AeAg@q@]e@{@qAg@y@s@oAk@gAy@gB_A}Bi@uAiEiLgFeNiDeJqAoDe@kAYw@s@mBQg@kBwEMYc@}@g@eA{@aBoBgDw@uAaDgEgC_D{AeBiAyAeA_Ba@s@}@gBw@iBc@iAGO_@kAUw@YiAOm@S{@Q}@Kk@a@oCGk@UcBGa@AKKq@w@kFs@_EmAuFMi@WcASu@U{@[kAK]IWMa@o@oBUq@Yw@m@cBu@mBi@qA]y@a@_Ae@cAa@y@g@cAa@u@y@{AaAgBgAqBgE_I_CiE}CwF}CsFm@eAg@{@q@iAm@aAcAaB}AgC}BqDeGwJWc@_@q@We@Wg@[o@Ym@Ug@q@}AqBsEuB_FMYO]aBoD{BuE}A}CuE_JoIyOoEcIiAoBsBwCo@{@i@q@]a@OOgAkA}A_BqAoA{BoBoAgAyCmCcA}@w@u@aAaA_AcAu@aAeAuA{A{B_A}AqBsDeDgGuCoFIOiAuB_@q@oBsDyAmCcAkBa@w@aAmB_@{@w@wBY_AW_Ae@aCk@eDYeB]oBYiBKu@Mu@a@eCy@aFYiBg@eCk@aCq@{Bs@yBq@eByAgDiCgEiA_BoA{A}@cA}@{@sAmAkBuA_@Yi@_@m@]w@]}As@iBw@uAe@w@U_AYgBi@iBk@eCy@_Cu@eDaAa@MeCk@_B[oCe@i@Io@I{AQWC[CcBMy@Ek@Ck@C{AAg@AmAA}AAoCBc@@gAD}@D]BgBLm@Dy@Fc@Da@F{@Nu@JyAVoATu@Ny@Pk@NoA\\aAXs@Rs@TgBh@QDwBx@WHmBj@aAVsAZuBl@gCt@sA`@mBj@oBl@oA^yAb@_Bd@{Ad@_D~@uCz@}ExAmDdA{Bn@}FdBuEtAqCx@qA`@{Ab@kA^q@PaAVwDjAqGlBsDfAoCx@cBf@yAb@yAb@sA`@yAb@{Ab@{A`@y@RgATk@LeAVw@PmAT{AVkAR{ATiBVkBTaAJ{@Ho@FkAJgAHy@Fu@D{@D_ADaADqBFgABmA@qA@kA?aAAs@?s@A_FKcDMwBK}AMuBQiAK_AKoAMsC_@i@IkASaCa@oB_@o@MmDw@WGwCs@_Bc@aAYaRwFgIeCyC}@qC{@eEoAg@Qm@Uu@[q@[gAk@[Qm@_@g@[s@g@k@c@i@c@kAgAu@u@[]_@c@q@y@g@o@e@q@g@w@w@qA{@_B}@mBgCcGuBcFmAoC}@mBo@mAg@_Am@cAc@s@Ye@a@m@q@aAy@gAi@q@i@o@a@e@g@k@e@g@e@g@YY][_@]m@i@o@k@m@i@i@g@SSs@cAOSQWKQIUGWGe@C_@AWAe@Aw@Au@Ci@CYE[GYIWO]OUOSUWm@q@w@{@UYMQMSMWKWGQKa@G_@CSEe@Ck@A]Ae@Am@CgAGoBAo@Ag@?Y?UGsJAuAAcBEuD?qAEwFGwIGeH?_@?e@A_@AyBAmDC{DG_HEuGAs@GoIMaUIgNEiFMyQC_EA_CCaCG_CC_AMkCg@wHw@{K_BiUaA}MUmDG{@E{@E}@C{@?WAe@A{@@{@JuDD{@NuBHy@Jy@BWJy@~@mHf@aENoAR{ABOFi@LwAZmFJ}CD}C?wCA}BCqAGsBEy@QkCUkCW_CC]c@eEg@oFu@}HMoAOkBUiCsAaNMkAiAeL]sDKqAIuAMqBEw@WyGAYWeHUmHEeBAWOgEOeEYqIC{@OiEEqAG}AEsAE}@McBI}@K_A]_CSmAQy@k@}BUw@k@kBm@oBcEwMSo@Oc@Oe@qBmG_D}JeAqC}@mBw@{A{@wAc@m@o@w@eAoA}@_Aw@w@w@{@KM]a@]c@q@eA[m@a@{@_@_AeAkC]{@[_AOc@_@eA_@eA[_A]mAQo@Qo@IYGSGSGUMa@KYKWMWIQIQMWaAqBKUcAaCqAgDeBqEaAiC]}@s@iBe@mAWq@m@}AYu@Qe@ISQa@MYO[S_@Q[OWQYU]U]a@m@m@}@i@y@[g@a@o@OUYa@W_@eA{AkAeB_AsAKOuAsBw@iAQUKMQUs@w@e@g@i@a@WSMIYOYQc@Sq@Sm@MUCa@Ei@Ee@AuAAa@BYD{@JyARc@F}ATg@Fk@HsAPmANa@Fa@FgC\\yCb@gBTuARkC\\g@J_ALq@HuAL_@BU@W@M?QAMAUCWEWEUGc@MQGQIUMSMYSg@a@SSSUY_@U]QYg@w@_AyAuA}B_CuDsFgJ}ByDcCgEyB}Dq@kA{@_By@wAy@sAa@m@q@}@o@y@}BwC]g@Yc@c@s@oAsB{AmCaAiBMUqAgCk@eAmA_CqDgHm@mAe@cAm@uAACm@qAm@kA_@q@c@s@_AqAc@q@_BuBs@cAk@y@}@oAaAkAm@q@e@c@{@y@gBeBe@c@a@a@g@i@WYqAcBe@o@m@y@g@u@e@s@_@q@a@u@u@}AyAcDu@aBc@}@a@{@c@_A]w@c@cAeCkFe@{@Yi@SYs@eAOUe@k@_BmBc@m@OOm@_Ag@w@_@o@We@Wg@Ym@Wm@kAqC[u@[o@u@{Ak@aAe@u@c@m@i@s@[_@c@g@g@g@s@s@c@a@}@q@u@i@[S_@Sa@Ua@Si@Wg@SaA_@iAc@oAe@s@WcA_@eA_@aA_@iAc@sBu@qAe@k@UyAi@o@Wq@Wu@[gAc@}@]uAi@_A_@u@YaA]s@Uy@WyAc@i@Oe@Ky@Ke@Ec@Ae@AaA?oBDcAB{@Ak@A[A]Ec@I_@KQG[M]OOIUOQMWSo@i@[Yc@_@SSQQo@o@m@o@q@u@c@g@SW[c@[e@OUQUo@u@SWk@s@KOc@k@m@u@_@g@W[GISWY]Y_@KMSWmA_B[a@{@gAs@_Am@w@cC{CsAcBOS]c@QU]c@sAaBe@m@m@u@GI{@iAiB_CuAgBkCiDY_@{H_Kk@s@kA{AU[kB_C]c@uAgBm@u@iEuFw@aASW]c@{AoBc@k@MQuCqDsDyEsDwE}DkFgDkEc@k@}BsCaEmFQUwD_FUY[a@[a@kA{AcAkAg@q@aBuBu@aAcAqAw@cAa@c@yAqBm@}@i@q@g@k@aAoAsAeBoA_ByBuCu@cA{AoBqAcB_@g@gAsAaAoAyD_FcB{Bq@}@eCaDsAcB}@cA][a@Wq@}@gB}BwBoCiB_CY]u@aAY_@[a@iAyAyFmH_BsBeAsAIKkAyAg@q@y@eAKM{AoBc@k@{@gAGIEE}@kA]c@}@kAeAsAw@eAQSy@gAOSs@_AgB{ByAoBa@i@eCaDyC{DqDuEe@m@uBkCEGo@w@uAgB{@iAc@k@gB}ByBqC]c@k@u@UY{@gAoCkDkAyAaJkLeG{HuCuDc@i@_AkAeDgEyAkBw@eAs@_Ak@s@eEkFiAuAcC}C}AoBoDqEOSyAkBQUSYc@k@sBwCcBwBo@{@a@g@a@i@_@e@{C_EoCkD{QsUqAcB[a@}AqB{EoGU[s@_ASWwBoCqAgB}@iAgFuGaAmAe@o@eAsAe@m@IMk@s@yCyDg@o@k@u@]c@c@m@uEiGoBeCe@o@OUs@}@s@_AkBeCgCwCi@u@}CcEsAgBe@o@MOIM]c@EEMQmBcC}@kAiAwAo@y@uAeBuBoC_AkAY_@yAmBo@}@eCoDs@}@}AmBcAmAm@w@mA_BcDeEmA_BSYaBmBaBuB}@kAcCaDIKq@{@{@kA_AiAcC}CsD}Eq@}@KOe@k@}AsBaAmA_AoAa@i@g@q@i@s@g@q@gB{B}@iAg@o@cAqAa@i@[a@w@gAoAcBGIa@i@u@_Ay@eA[a@GImHoJsCsDs@}@oCoDY_@GIkHmJm@w@UYoAaBeDiEiEuFk@w@GI{@iAy@gAOQuAiB_BqB_@e@Y_@eDeEU[aEoF[_@Y]SYa@k@QSIMIKy@cAw@eAGIy@eAY_@W]}@kA[a@_@e@gAyAgDkEc@k@yCyDgAuAc@i@U[cByBaBuBKOu@aAaAoASY{@kAg@q@KOQUa@i@[_@i@q@KOm@w@g@o@aAoAk@u@UYy@eAgIoKsBkCc@k@cAsAy@gAe@o@iAyAqBkCwAiBq@{@{@iAuAgBe@k@qFeHqBiC_C}Cs@}@kA}Aq@_Ai@s@CCGIs@}@IKuBqCMOo@{@kBeCSWw@eAOQsBkCgG}HcDeE_FmGuAeBMOkBaCs@}@mA}AW_@SYw@iAk@y@s@}@q@{@m@w@_@e@a@i@g@o@s@_A[c@GI]e@cAsAaBwB[a@mA_BEGUYq@{@Y_@kA}AGGiAwA_BqBsHuJc@k@a@i@gDqEcAsAmA}AeAsASWaCaDmBeCm@y@kKmNu@_Ao@{@qCqDi@i@UW{BuC}@oAaAmAsAgBIM[a@EGo@y@k@s@_@g@SWm@{@{@mAi@y@c@k@]c@Y_@iB{BwBqCaByBoBgCcFwGyAmBgB{BCEcAqAcAqAc@k@_AmAi@q@u@aAo@{@MQuCwDY_@q@{@g@q@_AoAgAuAc@k@eAuAyC}DoBgCeB}Bk@u@_@e@k@u@QSGI_@i@aC}Ce@m@w@aAmCeDqBkC[a@iAwAo@y@gB}BcAqAqFcHSWy@gAaAoAeFsG[a@{@iAc@k@W[k@u@oDwEoAaBUYe@m@_@i@eAuAY_@yAmBmA{AOSq@{@o@y@KMKMa@k@g@s@[a@Y_@]c@k@w@UYcByBo@s@}AsB{@iAgAyAEEY_@OQKMg@o@]c@i@o@]c@c@m@EGs@aA[c@]e@wAoBc@o@]m@q@{A}@mBSg@m@yAm@}A_@cAGQa@uAIYQo@Oo@Mg@U{@Os@Ga@GY]oBSwASuAWkCMoAS}BIy@S_C_@oDa@kD_@eCSsA[gBg@mCQaAiBcKWwAc@cCaAqFo@kDKo@[cB]mB{BcM[gBSgAa@{BO{@o@mDWuAWyAa@}B]kB_@qBWwAg@qCSgAY}AQaAOy@SiASgAIc@WwAMu@s@{Dy@uEq@{DQaAQ_A]mBIe@s@yDWwAcC{M]mB}@cFi@yCMq@G]QcAKm@m@cDWwAc@aC_@sBm@iDWuAmA}G_@wBY_BiCaOIe@CQ[_BQ{@Sy@WaAWw@Yy@]{@_@w@MWYk@[i@[g@m@}@q@{@o@y@cFyG{BwCyFuHy@cAmBgCcByBW]uAkBe@k@[c@mDmEgB{BuAgBmAaBc@o@w@gAi@u@}@kAoCqDa@i@yAmB[_@w@{@cAeASSo@o@aA{@w@q@u@o@e@{@Q]M_@Qo@E[E_@C_@?iAAe@E]GWKUMS]g@OUMYM]I]Gc@Ac@AkCNoCBm@HiBP}ATkANq@Vs@\\s@Zk@r@_A\\w@dAo@v@a@\\M\\Mb@O^Ml@OTGz@Wj@Qr@StA_@rBm@RGNC`@CRBn@L^HZTNTJXF^?XEZCNIPQRMNMFMFO?OASIOIOQQa@Ki@G}@KsA_@sESgCG{@Eo@MwBG}@KaBKsAUkC?oB@m@Di@Hw@Da@Ji@Ru@\\}@R]TWRMRGf@ATF^VX`@NXJf@Bf@Et@Kd@IXOVWZYT_@PSBa@@k@Io@Yg@YMIy@e@gFaDk@[s@a@c@QWIi@]gDmBkCiBqAaAYS_Ao@yAkA{@u@gA}@gA_AcB}Ao@k@c@a@[Y[[m@k@qAwA{AeBu@y@q@w@_@e@cAmAeCuCMOa@e@wRaUKMuIeK}KgMoI}JcKsLy@_A{A_BeAmAaCqCiAsAaBkBwCiDuCgDyAeB{BkCu@{@SUOSyAcBeAkAoAyAkEcF_CqCuBcCaEyEwAaBy@_AgBsBa@g@kAuA{BkCuDoEiBcCgCoDiAaBiAgBcBoCWc@aAeBsAeC_AeBcAsBgCsFiBiEk@yAi@uAQg@qAmDcA}CsAwEiBoGaDmLcAoDgCcJeAuDcBaGK_@o@yBu@kCkBiGyBmHo@sBa@oAGSq@uBu@}Ba@kAk@_B}A_EwAeDg@cAq@yAiAyBm@kAa@u@_@s@Q]g@_AwAiCcBwCk@eAoAoBs@kAcCeEyFoJaCaE_BqCiAsB_AkBsBgEwB}EaCcG}@aCyBkGo@sBiBuG_BkG[qAQs@Kc@o@oCg@cCq@cD_@kBa@sB_@sBSkAy@}Eg@oDWmBOuAAMQ{AIu@Gm@c@kFEe@Eq@C]KqAYcESyC]eFEs@Cg@UuDc@sGQsCGw@c@aGQ}B]aEKiAU{CMaB[uDOeBS{BKaA]{C_@uDe@kDIg@mAqH}@oFKk@a@uB[uA}AqGaAsDoAmEu@gCW{@_@iA}C{Ic@kAsAiDy@gBk@qAOYEGSe@Wi@g@gAaAoB[m@oAcC{AuCYg@a@y@_ByCcCuEs@uAe@{@aBcDc@y@i@cA[m@i@eAkDoGcCcEw@oAe@u@OUUa@g@s@wAsBkBiCk@u@e@k@uBiCoB}B_CiCkAmAwFmFmCeCmG{FqEqEu@s@[Ye@c@sCiCuH{GSQoEgEgDuCyAsAIIoAkA_A{@eHsGuFiFmDcDcDwCsDiDuG_GkEqD}BgBiDgCgCkBy@k@{AcAgCaBiCaB{BsA_E}BqBiAoHeEkDoB{GyDiEcCiAm@uBkAuBeAmEyBmCsA}@c@qHeEsCcB_CwAIGoCeBoCcBcDgBs@_@sBgAu@a@_@ScAg@kAm@_@SoAo@aFiCyMyGaAg@}BkAeAi@kGaDqCuAs@[yBoAECm@[{MaHmIgEkKqFgEwB]Qc@UkAq@iB}@UKQKGCaCgAkDeBoG_DgIcEiK{FkG}C}GgDqCwAsC{AkFsCOIcAk@eAk@sC}AaCqA}BoAmAo@e@WqFqCaDcBuGiDeFiCaB{@]Q{BiAQIuBiAwBgAuFuC_@SoBaAaAe@s@_@g@WyCyA}EaCuCqA_E_Ba@Q{@a@aAe@o@[}A{@m@a@}@o@iA_AuBgB{@_Ai@m@}AmBs@cAu@kAe@w@e@y@Uc@o@wAcAyBo@uAg@iAc@_Am@sAs@aBc@aAq@yAk@qAc@}@a@cAs@}Ac@aAm@qAqAyCaBmD{@iBu@qA_A}Ai@u@o@y@mAyAoAsAmAgA_Aw@aAq@y@k@oCaBgCyAMIm@_@mBkAa@YQKs@c@g@[_@Ua@UgAo@yBsAiAq@_BcA_BeAgCiBqDoCwBkBmCaCOO_CqBgCaCaB}AWUuCkCiBeBWUq@m@wAqAoBiBwEkE_GoFkJuIo@e@i@c@aAs@}@o@yDgCuA{@w@e@cC{AcP{JcHiEmCaBqJ_GoG}DkDwBsBoAmDwBg@]a@Ye@UYOgAs@}ByAiCaBo@a@uDaC{ByAYSmD_CgHyEoD_CeEgCUM{@g@qDqBi@Yq@k@]We@Yi@[yAy@_Ag@}As@eBw@iAg@eAk@eAo@i@g@q@o@g@o@w@{@gAgAoAcAwAcAs@g@UOs@e@MMKMIOQ]K[G_@@oA?IJe@BOf@gCJg@Ns@F]BW@_@XcAZgA^kA~@cCN_@Pg@p@eB|@{BJWNa@v@yBVy@j@eBNk@ZiAPo@lAaFr@wCrAsF|AoHTeArEuTvH__@pAkGjCiMl@wCj@mCnDyPxBmK\\eB|AyHpAmG|DkRpBsJReAJe@f@aCxAeHNu@tAyGViA^gB\\qAT_AFQJY^cAp@eBn@sA^o@HOp@gAT[fA{AfA{AvAiBz@gA^i@\\c@X]TWTWTWTYPSNSNUNWP]P_@N[LYLYLYJYHWLa@HYFUDQF[DSDUDUBQBQBQBSDc@Da@B]B]B_@@S@]@cA?e@?e@Aw@Cq@Ce@Ce@ASEg@CWE]Ge@Ga@Gc@EYG_@Ic@Ki@Kg@I]Kc@I]Ka@YgAk@eBg@yAUm@Qc@q@{AWk@qAgCi@}@u@kAa@o@k@u@_AmA_AcAaAeAk@k@kEmEsBsB{B}BuAwAgAkAaBaBsDwDuByBUWu@}@q@}@o@_Am@aAcAcBc@{@Ym@w@eBy@qBq@oBe@{A[iAKa@[wAqAqGMo@k@wCiA{EU{@g@_Be@mAg@oAk@mAm@mA_@q@e@y@{@mAoAeBuA}AwAwA_A}@MMq@q@gDeDOOWWu@{@a@g@_AwAi@cAUi@Wk@}AkDe@cAa@}@]y@e@cA_AaB[u@Yk@k@sAc@eAe@iAc@iAYs@w@mB{@yB}@yBc@eAQ_@Q_@MWMUMUKQKOOSQUOQSSSSSQUQQMMIQKQKMGWMSIOGQGWIYIWGSESEMCWEQCUC]Cc@CYAiAAaAJy@NaAZ{An@_Ah@KFKFIDMFoB|@IDUJ}An@e@N_@Jo@J_@Di@FqADsAAcAEkBSkAQ}@QyA_@yA_@kCo@yDaAkCq@i@MUGc@Ka@KICYGoA[{Cw@uG_BcCm@o@QmEeAa@KyBk@m@Qc@MQGUIOGOGQIQIOIQKMIOKQMKIOMQQOQIKIMGKGMEKEMIWGWGYEUCQCSCWC[AOAWAa@?c@?c@@q@@o@@m@DqB^iIBo@DaAPcD@_@@g@Fy@HaB@YF}A@S@[FmABk@Bi@JwBBk@Di@Dm@Fq@B[BUFu@FuAJgC@]FuA@e@@aA@eC?SByAL{ALaAD_@F[PqANkALs@VkBL_APqAn@qELkAHaB@c@PkE`A}UJiBTeCdAcLNsAR{BTiCDg@JaAFo@VkCb@mEj@iGRoBNaBVqFf@eLRoDNoARaAXcALYTm@j@cAVc@bA{AzA_ChAgBj@}@|@gAX_@NSb@k@f@u@`@m@Xc@T_@LSNQJGLGNEJAP?L@H@PFHDNJLNFJFLDT@P?X?X@b@@P@JBLDLFJHJHFHDHBH@H?JAJCHEHGLMFKDMDQBU@K?KAMAICMCKEMKSGIGIIKCGCIAGA[|@Jl@F^D`CX|@HdAHJ@pAPf@FP@RAd@Zn@b@`@`@jBtAhBrArBxAbBjAzB{FhAiD"
        }
    ],
    "meta": {
        "userId": "sahilmandhare@ternaengg.ac.in",
        "customerId": "cus_P9hruuMiYujCsw",
        "tx": 5,
        "type": "api",
        "client": "api",
        "source": ""
    }
}
