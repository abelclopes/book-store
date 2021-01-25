using Microsoft.EntityFrameworkCore.Migrations;

namespace Api.migrations
{
    public partial class InitialCreated7 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "Rented",
                table: "Books",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Rented",
                table: "Books");
        }
    }
}
