import { ApiProperty } from "@nestjs/swagger";

export class UpdateDto<Model> {
  @ApiProperty()
  criteria : any;
  @ApiProperty()
  data : Model;
}
