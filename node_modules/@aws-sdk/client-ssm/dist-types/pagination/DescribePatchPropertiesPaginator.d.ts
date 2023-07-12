import { Paginator } from "@smithy/types";
import { DescribePatchPropertiesCommandInput, DescribePatchPropertiesCommandOutput } from "../commands/DescribePatchPropertiesCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare function paginateDescribePatchProperties(config: SSMPaginationConfiguration, input: DescribePatchPropertiesCommandInput, ...additionalArguments: any): Paginator<DescribePatchPropertiesCommandOutput>;
