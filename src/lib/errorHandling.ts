/**
 * Custom error class for database-related errors
 */
export class DatabaseError extends Error {
  constructor(
    message: string,
    public readonly operation: string,
    public readonly originalError?: unknown
  ) {
    super(message);
    this.name = "DatabaseError";
  }
}

/**
 * Handles Supabase errors and throws a standardized DatabaseError
 * 
 * @param error - The error from Supabase
 * @param operation - Description of the operation that failed
 * @throws {DatabaseError}
 */
export function handleDatabaseError(
  error: unknown,
  operation: string
): never {
  const errorMessage = error instanceof Error ? error.message : String(error);
  
  throw new DatabaseError(
    `Failed to ${operation}: ${errorMessage}`,
    operation,
    error
  );
}

/**
 * Type guard to check if an error is a DatabaseError
 */
export function isDatabaseError(error: unknown): error is DatabaseError {
  return error instanceof DatabaseError;
}
