export interface FleetSummaryData {
  label: string;
  value: number;
  hasInfo: boolean;
}

export interface FleetGeneralData {
  fleetTrucks: {
    activeTrucks: number;
    activeTrucksPercent: number;
    totalTrucks: number;
    emptyTrucks: number;
    emptyTrucksPercent: number;

  },
  fleetTimeline: {
    label: string;
    value: number;
  }[],
  fleetChartData: {
    label: string,
    values: number[]
  }[]
}

export interface FleetDetails {
  label: string;
  hasInfo: boolean;
  iconUrl: string;
  data: {
    fleet: {
      label: string;
      date: string;
      numberOfTrucks: number;
      trucksWithDriver: number;
      trucksWithoutDriver: number;
      trucksDailyAverage: number;
    };
    duration: {
      label: string;
      days: number;
      hours: number;
      minutes: number;
    };
    cost: {
      label: string;
      value: number;
      currency: string;
      cpmValue: number;
      cpmCurrency: string;
    };
  };
}

export interface FleetData {
  fleetSummary: FleetSummaryData[];
  fleetGeneralData: FleetGeneralData;
  fleetDetails: FleetDetails[];
}
