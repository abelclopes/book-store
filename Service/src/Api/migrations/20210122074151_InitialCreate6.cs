using Microsoft.EntityFrameworkCore.Migrations;

namespace Api.migrations
{
    public partial class InitialCreate6 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Categorias_Books_BookId",
                table: "Categorias");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Categorias",
                table: "Categorias");

            migrationBuilder.RenameTable(
                name: "Categorias",
                newName: "Categories");

            migrationBuilder.RenameColumn(
                name: "Nome",
                table: "Categories",
                newName: "Name");

            migrationBuilder.RenameColumn(
                name: "Descricao",
                table: "Categories",
                newName: "Description");

            migrationBuilder.RenameIndex(
                name: "IX_Categorias_BookId",
                table: "Categories",
                newName: "IX_Categories_BookId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Categories",
                table: "Categories",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Categories_Books_BookId",
                table: "Categories",
                column: "BookId",
                principalTable: "Books",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Categories_Books_BookId",
                table: "Categories");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Categories",
                table: "Categories");

            migrationBuilder.RenameTable(
                name: "Categories",
                newName: "Categorias");

            migrationBuilder.RenameColumn(
                name: "Name",
                table: "Categorias",
                newName: "Nome");

            migrationBuilder.RenameColumn(
                name: "Description",
                table: "Categorias",
                newName: "Descricao");

            migrationBuilder.RenameIndex(
                name: "IX_Categories_BookId",
                table: "Categorias",
                newName: "IX_Categorias_BookId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Categorias",
                table: "Categorias",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Categorias_Books_BookId",
                table: "Categorias",
                column: "BookId",
                principalTable: "Books",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
