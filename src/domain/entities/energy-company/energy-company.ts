import Entity from "../../../@shared/domain/entities/entity";
import EnergyCompanyValidatorFactory from "../../validators/energy-company/energy-company.validator";
import EntityValidationError from "../../../@shared/domain/errors/validation.error";

export type EnergyCompanyProperties = {
  name: string;
  nominal_voltage: number;
  residential_percent: number;
  commercial_percent: number;
};

export class EnergyCompany extends Entity<EnergyCompanyProperties> {
  get name(): string {
    return this.props.name;
  }
  private set name(value: string) {
    this.props.name = value;
  }

  get nominal_voltage(): number {
    return this.props.nominal_voltage;
  }
  private set nominal_voltage(value: number) {
    this.props.nominal_voltage = value;
  }

  get residential_percent(): number {
    return this.props.residential_percent;
  }
  private set residential_percent(value: number) {
    this.props.residential_percent = value;
  }

  get commercial_percent(): number {
    return this.props.commercial_percent;
  }
  private set commercial_percent(value: number) {
    this.props.commercial_percent = value;
  }

  update(name: string, nominal_voltage: number, residential_percent: number, commercial_percent: number): void {
    this.validate({ name, nominal_voltage, residential_percent, commercial_percent })
    this.name = name;
    this.nominal_voltage = nominal_voltage;
    this.residential_percent = residential_percent;
    this.commercial_percent = commercial_percent;
  }

  validate(props: EnergyCompanyProperties) {
    const validator = EnergyCompanyValidatorFactory.create();
    const isValid = validator.validate(props);
    if (!isValid) throw new EntityValidationError(validator.errors)
  }
}
