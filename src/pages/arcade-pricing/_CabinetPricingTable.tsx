import {printCurrency} from "@root/utils";

import {
    type VenueData,
    type VenuesFactory,
} from "./_venues-factory";


interface Cabinet {
    readonly lastUpdated: string;

    readonly cabinet: string;
    readonly unitName: [string, string];
    readonly unitsPerCredit: number;
    readonly creditCost: number;
}

interface CabinetPricingTableRowProps {
    readonly venueData: VenueData;
    readonly data: Cabinet;
}

function CabinetPricingTableRow({venueData, data}: CabinetPricingTableRowProps) {
    // TODO: We currently assume one price tier.
    if (venueData.priceTiers.length != 1) {
        throw new Error("Only supports one price tier right now.");
    }
    const priceTier = venueData.priceTiers[0];
    if (!priceTier) throw new Error("Unexpected falsy.");

    // TODO: Needs lastUpdated validation

    const creditPerUnit = data.creditCost / data.unitsPerCredit;
    const realPerUnit = (creditPerUnit * priceTier.realCost) / priceTier.creditValue;
    return <tr>
        <td>{data.lastUpdated}</td>
        <td>{data.cabinet}</td>
        <td>{data.unitsPerCredit} {data.unitName[(data.unitsPerCredit == 1) ? 0 : 1]}</td>
        <td>{printCurrency(data.creditCost)}</td>
        <td>{printCurrency(Math.ceil(creditPerUnit))} per {data.unitName[0]}</td>
        <td>${(realPerUnit / 100).toFixed(3)} per {data.unitName[0]}</td>
    </tr>;
}


// ---------------------------------------------------------------------------------------


interface Props {
    readonly region: string;
    readonly venue: string;
    readonly venuesFactory: VenuesFactory;
    
    readonly cabinets: Cabinet[];
    readonly comments: string;
}

export default function CabinetPricingTable(
    {region, venue, venuesFactory, cabinets, comments}: Props
) {
    const venueData = venuesFactory.getVenuesData(region, venue);
    return <>
        <h4>{venue}</h4>
        <p>{comments}</p>
        <p><table>
            <thead>
                <tr>
                    <th>Last Updated</th>
                    <th>Cabinet</th>
                    <th>Play</th>
                    <th>Credit Per Play</th>
                    <th>Credit Per Unit</th>
                    <th>Real Cost Per Unit</th>
                </tr>
            </thead>
            <tbody>
                {cabinets.map(x =>
                    <CabinetPricingTableRow venueData={venueData} data={x} />
                )}
            </tbody>
        </table></p>
    </>;
}

