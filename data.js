var APP_DATA = {
  "scenes": [
    {
      "id": "0-living",
      "name": "LIVING",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.031570222932593595,
        "pitch": -0.05021636940208296,
        "fov": 1.3911794189911846
      },
      "linkHotspots": [
        {
          "yaw": 0.031570222932593595,
          "pitch": -0.05021636940208296,
          "rotation": 7.853981633974483,
          "target": "2-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-family-living",
      "name": "FAMILY LIVING",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.10345427512964278,
        "pitch": -0.00997609856896986,
        "fov": 1.3911794189911846
      },
      "linkHotspots": [
        {
          "yaw": 0.10345427512964278,
          "pitch": -0.00997609856896986,
          "rotation": 4.71238898038469,
          "target": "3-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-dining",
      "name": "DINING",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.058717652950953436,
        "pitch": 0.01915186903329591,
        "fov": 1.3911794189911846
      },
      "linkHotspots": [
        {
          "yaw": -0.058717652950953436,
          "pitch": 0.01915186903329591,
          "rotation": 2.356194490192345,
          "target": "1-family-living"
        },
        {
          "yaw": -0.7127512581236672,
          "pitch": 0.17902910703399755,
          "rotation": 5.497787143782138,
          "target": "0-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-kitchen",
      "name": "KITCHEN",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.07914550031692968,
        "pitch": -0.035641317430904706,
        "fov": 1.3911794189911846
      },
      "linkHotspots": [
        {
          "yaw": -0.07914550031692968,
          "pitch": -0.035641317430904706,
          "rotation": 0,
          "target": "4-washing-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-washing-area",
      "name": "WASHING AREA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.017543773211208702,
          "pitch": -0.037197310668208416,
          "rotation": 10.995574287564278,
          "target": "5-stair-case"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-stair-case",
      "name": "STAIR CASE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.043184171891612166,
        "pitch": -0.005696940985487231,
        "fov": 1.3911794189911846
      },
      "linkHotspots": [
        {
          "yaw": -0.6509344682236566,
          "pitch": 0.0401911900409182,
          "rotation": 10.995574287564278,
          "target": "6-bedroom-1"
        },
        {
          "yaw": 0.6837806784805736,
          "pitch": 0.002590406452277705,
          "rotation": 1.5707963267948966,
          "target": "7-bedroom-2"
        },
        {
          "yaw": -2.7556105358231324,
          "pitch": 0.16985752225149042,
          "rotation": 0,
          "target": "2-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-bedroom-1",
      "name": "BEDROOM 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.05123718759733542,
        "pitch": -0.04649663833528095,
        "fov": 1.3911794189911846
      },
      "linkHotspots": [
        {
          "yaw": -1.0061782659002265,
          "pitch": -0.03739520813333819,
          "rotation": 11.780972450961727,
          "target": "5-stair-case"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-bedroom-2",
      "name": "BEDROOM 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.682825858507,
          "pitch": 0.16316745008851186,
          "rotation": 0,
          "target": "5-stair-case"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
