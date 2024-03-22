import { Paginator } from "@smithy/types";
import { DescribePatchPropertiesCommandInput, DescribePatchPropertiesCommandOutput } from "../commands/DescribePatchPropertiesCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateDescribePatchProperties: (config: SSMPaginationConfiguration, input: DescribePatchPropertiesCommandInput, ...rest: any[]) => Paginator<DescribePatchPropertiesCommandOutput>;
